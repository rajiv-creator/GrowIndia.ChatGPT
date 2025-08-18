'use client';

export default function DebugSentryPage() {
  return (
    <main style={{ padding: 32 }}>
      <h1>GrowIndia Jobs</h1>
      <button
        onClick={() => {
          // This will be captured by Sentry (client error)
          throw new Error('Test client error from /debug-sentry');
        }}
        style={{ fontSize: 20, padding: '12px 16px' }}
      >
        Throw Client Error
      </button>
    </main>
  );
}

