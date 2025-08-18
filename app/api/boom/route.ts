export async function GET() {
  // This will be captured by Sentry (server error)
  throw new Error('Server blew up on purpose!');
}
