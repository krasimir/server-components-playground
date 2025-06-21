import { Suspense } from "react";
import { getProducts } from "../utils";
import Products from "./Products";
import Navigation from "../components/Navigation";

export default async function App() {
  const products = getProducts();

  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={products} />
      </Suspense>
    </>
  );
}