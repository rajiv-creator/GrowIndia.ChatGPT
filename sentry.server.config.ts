// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  // Use the private DSN; fall back to public if needed.
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,
  tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE ?? 0.2),
});
