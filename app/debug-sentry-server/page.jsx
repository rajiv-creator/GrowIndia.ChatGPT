export const dynamic = 'force-dynamic'; // prevents prerendering at build

export default function DebugSentryServer() {
  // This runs on the server at request time and will throw intentionally.
  throw new Error('Server blew up on purpose!');
}
