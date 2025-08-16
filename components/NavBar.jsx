'use client';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [user, setUser] = useState(null);
  useEffect(() => { supabase.auth.getUser().then(({data}) => setUser(data?.user || null)); }, []);

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/jobs" className="font-semibold text-xl">GrowIndia Jobs</Link>
        <nav className="flex gap-3">
          <Link className="btn" href="/jobs">Jobs</Link>
          <Link className="btn" href="/login">{user ? 'Account' : 'Login'}</Link>
        </nav>
      </div>
    </header>
  );
}
