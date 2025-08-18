import * as Sentry from '@sentry/nextjs';

export async function GET() {
  // add some context so it’s easy to find in Sentry
  Sentry.setTag('where', 'api/boom');
  Sentry.setContext('details', { note: 'Intentional server error for Sentry' });

  // intentionally crash (Next.js will return 500)
  throw new Error('Boom from /api/boom');
}
