import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, password, userType } = body;

    if (!firstName || !lastName || !email || !password || !userType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tableName = userType === 'investor' ? 'investors' : 'auditors';

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert into supabase
    const { data, error } = await supabaseAdmin
      .from(tableName)
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone: phone || null,
          password: hashedPassword,
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      // Handle unique violation or other errors
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
      }
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'User registered successfully', data: data[0] });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
