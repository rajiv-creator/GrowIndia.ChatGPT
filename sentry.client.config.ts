import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT,
  tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE ?? 0.2),
});
