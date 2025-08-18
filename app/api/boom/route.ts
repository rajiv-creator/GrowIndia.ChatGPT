// app/api/boom/route.ts
export async function GET() {
  throw new Error('Boom from /api/boom');
}
