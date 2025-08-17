'use client';
export const dynamic = 'force-dynamic';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ApplyPage() {
  const params = useSearchParams();
  const jobIdFromQuery = params.get('job') || '';
  const [user, setUser] = useState(null);
  const [jobId, setJobId] = useState(jobIdFromQuery);
  const [coverLetter, setCoverLetter] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data?.user || null));
  }, []);

  async function submit(e) {
    e.preventDefault();
    setError(''); setStatus('');
    if (!user) { setError('Please log in first.'); return; }

    // Insert using anon client; RLS will ensure only owner can write
    const payload = {
      job_id: jobId,
      candidate_id: user.id,     // Assumes candidates.id == auth user id
      cover_letter: coverLetter || null
    };

    const { error } = await supabase.from('applications').insert(payload);
    if (error) {
      setError(error.message + ' — If this mentions "foreign key", create a candidate profile row with id = your user id.');
    } else {
      setStatus('Application submitted! Check your Applications table.');
      setCoverLetter('');
    }
  }

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Apply</h1>

      {!user && (
        <div className="card">
          <p>You need to be logged in to apply.</p>
          <Link className="btn mt-2" href="/login">Go to Login</Link>
        </div>
      )}

      <form onSubmit={submit} className="card space-y-3">
        <label className="block">
          <div className="text-sm mb-1">Job ID</div>
          <input className="input" value={jobId} onChange={e => setJobId(e.target.value)} placeholder="paste or use ?job=<id>" required />
        </label>

        <label className="block">
          <div className="text-sm mb-1">Cover Letter (optional)</div>
          <textarea className="input" rows={5} value={coverLetter} onChange={e => setCoverLetter(e.target.value)} />
        </label>

        <button className="btn" type="submit">Submit Application</button>

        {status && <div className="text-green-700">{status}</div>}
        {error && <div className="text-red-600">{error}</div>}
      </form>

      <div className="card">
        <h2 className="font-semibold">Debug</h2>
        <p className="text-sm">Logged in user id: <code className="bg-gray-100 px-1 rounded">{user?.id || '—'}</code></p>
      </div>
    </div>
  );
}
