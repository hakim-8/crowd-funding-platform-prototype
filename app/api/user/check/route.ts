import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function GET() {
  const { userId } = await auth();
  
  if (!userId) {
    return NextResponse.json({ exists: false }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('users')
    .select('user_id')
    .eq('user_id', userId)
    .single();

  if (data) {
    return NextResponse.json({ exists: true });
  }

  return NextResponse.json({ exists: false }, { status: 404 });
}
