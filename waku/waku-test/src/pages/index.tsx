import { Suspense } from "react";
import Products from "../components/Products";

let cache: any = null;

async function getProducts() {
  if (cache) return cache;
  const response = await fetch("http://localhost:3000/api/products");
  return (cache = response.json());
}

export default function App() {
  async function addToCart(selected: number[]) {
    "use server";
    const response = await fetch("http://localhost:3000/api/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ products: selected })
    });
    return response.json();
  }

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <Products productsRequest={getProducts()} addToCart={addToCart} />
    </Suspense>
  );
}
