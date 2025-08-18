import * as Sentry from '@sentry/nextjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    throw new Error('Boom from /api/boom');
  } catch (err) {
    Sentry.captureException(err as Error);
    await Sentry.flush(2000);
    throw err; // keep 500 response
  }
}

