// app/api/boom/route.ts

// Keep the route dynamic so it isn't pruned by static optimization
export const dynamic = 'force-dynamic';
// Make sure this runs on Node (not Edge), which is safest with Sentry
export const runtime = 'nodejs';

export async function GET(): Promise<Response> {
  // For the first test, just prove the route exists:
  return new Response('ok from /api/boom', { status: 200 });
}
