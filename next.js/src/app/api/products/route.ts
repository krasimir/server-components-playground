import Data from './products.json';

export async function GET(request: Request) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a delay
  return new Response(JSON.stringify(Data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
