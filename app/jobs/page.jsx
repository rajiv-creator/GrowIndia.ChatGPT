import Link from 'next/link';
import { getAdminClient } from '@/lib/supabaseAdmin';

export const dynamic = 'force-dynamic';

export default async function JobsPage() {
  const supabase = getAdminClient();
  // Read jobs (filter active just in case service role bypasses RLS)
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .or('status.eq.active,status.is.null')
    .order('created_at', { ascending: false })
    .limit(50);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Open Jobs</h1>
        <Link className="btn" href="/login">Post / Apply</Link>
      </div>

      {error && <div className="text-red-600">Error loading jobs: {error.message}</div>}

      <ul className="grid gap-4 sm:grid-cols-2">
        {(jobs || []).map((job) => (
          <li key={job.id} className="card">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-lg">{job.title || 'Untitled role'}</h2>
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 border">{job.location || '—'}</span>
            </div>
            <p className="text-sm mt-2 line-clamp-3">{job.description?.slice(0,180) || 'No description'}</p>
            <div className="mt-3 flex gap-3">
              <Link className="btn" href={`/jobs/${job.id}`}>View</Link>
              <Link className="btn" href={`/apply?job=${job.id}`}>Apply</Link>
            </div>
          </li>
        ))}
      </ul>

      {!jobs?.length && (
        <div className="card">
          <p>No jobs found. Insert a test row in Supabase → `jobs` to see it here.</p>
        </div>
      )}
    </div>
  );
}
