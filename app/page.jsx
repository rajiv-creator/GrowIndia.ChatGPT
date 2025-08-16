import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <p>This is the MVP scaffold. Continue to Jobs.</p>
      <Link className="btn" href="/jobs">Browse Jobs</Link>
    </div>
  );
}
