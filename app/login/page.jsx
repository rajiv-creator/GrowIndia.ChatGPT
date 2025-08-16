'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function sendMagicLink(e) {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/jobs` }
    });
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login via Email</h1>
      {sent ? (
        <div className="card">Check your inbox for a magic link.</div>
      ) : (
        <form onSubmit={sendMagicLink} className="space-y-3 card">
          <input className="input" type="email" required placeholder="you@example.com"
                 value={email} onChange={e => setEmail(e.target.value)} />
          <button className="btn" type="submit">Send Magic Link</button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
