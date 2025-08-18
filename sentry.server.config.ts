// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  // ✅ read the server DSN (fallback to the public DSN if you also set that)
  dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,

  // optional but helpful: keep envs consistent with Vercel
  environment:
    process.env.SENTRY_ENVIRONMENT ||
    process.env.VERCEL_ENV ||           // "production" / "preview" / "development"
    process.env.NODE_ENV,               // "production" in prod

  tracesSampleRate: 1.0,
  // replaysSessionSampleRate: 0.1,
  // replaysOnErrorSampleRate: 1.0,
});
