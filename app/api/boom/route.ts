// app/api/boom/route.ts
import * as Sentry from '@sentry/nextjs';

export const runtime = 'nodejs';       // <-- make sure this runs on Node
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    throw new Error('Boom from /api/boom'); // intentional server error
  } catch (err) {
    // send it to Sentry, then rethrow so you still get HTTP 500
    Sentry.captureException(err as Error);
    await Sentry.flush(2000);
    throw err;
  }
}
