import { delay } from "./utils";

export async function addToCart(prevState: any, formData: FormData): Promise<string> {
  "use server";

  console.log('prevState: ' + prevState);

  const productsStr = formData.get("selectedProducts") as string;
  if (productsStr === '') {
    return 'No products selected.';
  }

  const selectedProducts = productsStr.split(",").map(Number);
  const result = `${selectedProducts.length} products processed.`;

  await delay();
  return result;
}