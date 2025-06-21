import { headers } from "next/headers";

export async function getProducts() {
  const baseURL = await getBaseURL();
  await delay(3000);
  const res = await fetch(`${baseURL}/api/products`);
  const { products } = await res.json();
  return products;
}

export async function delay(milliseconds: number = 3000) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function getBaseURL() {
  const headersList = await headers();
  return headersList.get("x-forwarded-proto") + "://" + headersList.get("host");
}