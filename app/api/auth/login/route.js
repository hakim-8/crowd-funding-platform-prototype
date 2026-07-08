import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, userType } = body;

    if (!email || !password || !userType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tableName = userType === 'investor' ? 'investors' : 'auditors';

    // Fetch user by email
    const { data: users, error } = await supabaseAdmin
      .from(tableName)
      .select('*')
      .eq('email', email);

    if (error) {
      console.error('Supabase fetch error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    const user = users?.[0];

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Generate random 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Prepare webhook payload
    const type = userType === 'auditor' ? 'auditor-verification' : 'investor-verification';
    const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;
    
    // Send webhook if URL is available
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user.email,
            loginDetails: {
              firstName: user.first_name,
              lastName: user.last_name,
              userType: userType,
              time: new Date().toISOString()
            },
            type: type,
            verificationCode: verificationCode
          }),
        });
      } catch (webhookError) {
        console.error('Failed to trigger webhook:', webhookError);
        // We might not want to fail the login if just the webhook fails, or we might.
        // Let's proceed but maybe log it.
      }
    } else {
      console.warn('Webhook URL not configured.');
    }

    // Remove password from response
    const { password: _, ...safeUser } = user;

    // Return the verification code in the response so the frontend can check it locally.
    // In a production app, we would store it in a DB and verify via another endpoint.
    return NextResponse.json({ 
      success: true, 
      message: 'Verification code sent',
      user: safeUser,
      verificationCode: verificationCode
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
