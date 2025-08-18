// instrumentation.ts
// Ensures both server + client Sentry configs are executed in the App Router.
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
  // Having a client config is optional, but we'll import it if present.
  try {
    await import('./sentry.client.config');
  } catch {}
}
