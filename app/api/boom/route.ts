import * as Sentry from '@sentry/nextjs';

export async function GET() {
  Sentry.setTag('where', 'api/boom');
  Sentry.setContext('details', { note: 'Intentional server error for Sentry' });
  throw new Error('Boom from /api/boom');
}
