import Navigation from "../components/Navigation";
import { getProducts } from "../utils";
import Products from "./Products";

import { addToCart } from "../actions";

export default async function App() {
  const products = await getProducts();

  return (
    <>
      <Navigation />
      <Products products={products} addToCart={addToCart} />
    </>
  );
}
