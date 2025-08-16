import { getAdminClient } from '@/lib/supabaseAdmin';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function JobDetail({ params }) {
  const supabase = getAdminClient();
  const { data: job, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) {
    return <div className="text-red-600">Error: {error.message}</div>;
  }
  if (!job) {
    return <div className="card">Job not found.</div>;
  }

  return (
    <div className="space-y-4">
      <Link href="/jobs" className="text-sm">&larr; Back to jobs</Link>
      <div className="card">
        <h1 className="text-2xl font-semibold">{job.title || 'Untitled role'}</h1>
        <p className="text-sm text-gray-600 mt-1">{job.location || '—'}</p>
        <div className="prose mt-4 max-w-none whitespace-pre-wrap">{job.description || 'No description'}</div>
        <div className="mt-4">
          <Link className="btn" href={`/apply?job=${job.id}`}>Apply to this job</Link>
        </div>
      </div>

      <div className="card">
        <h2 className="font-semibold">Raw record (debug)</h2>
        <pre className="text-xs overflow-auto">{JSON.stringify(job, null, 2)}</pre>
      </div>
    </div>
  );
}
