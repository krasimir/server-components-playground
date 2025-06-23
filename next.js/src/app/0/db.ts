export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const data = response.json()
  return data;
}
