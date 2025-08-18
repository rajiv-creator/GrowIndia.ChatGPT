// app/api/boom/route.ts

// Make this route always run on request (no build-time prerendering)
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Ensure it runs on the Node runtime (not Edge)
export const runtime = 'nodejs';

export async function GET() {
  // Intentional crash so Sentry captures a server error
  throw new Error('Boom from /api/boom');
}
