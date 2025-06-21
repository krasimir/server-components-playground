import Navigation from "../components/Navigation";
import { delay, getProducts } from "../utils";
import Products from "./Products";

export default async function App() {
  const products = await getProducts();

  async function addToCart(selectedProducts: number[]) {
    "use server";
    await delay()
    return { message: `${selectedProducts.length} products processed.` };
  }

  return (
    <>
      <Navigation />
      <Products products={products} addToCart={addToCart} />
    </>
  );
}
