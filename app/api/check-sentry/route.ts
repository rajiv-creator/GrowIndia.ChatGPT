// app/api/check-sentry/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({
    dsnPresent: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN),
    env: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || 'unknown',
  });
}
