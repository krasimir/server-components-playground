import React, { use } from "react";
import ProductsList from "./ProductsList";
import { getProducts } from "./db";

export default async function Products() {
  const { products } = await getProducts();

  return <ProductsList products={products} />;
}
