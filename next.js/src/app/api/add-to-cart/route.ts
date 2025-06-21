export async function POST(request: Request) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const body = await request.json();
  return new Response(
    JSON.stringify({
      success: true,
      products: body.products.length
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" }
    }
  );
}
