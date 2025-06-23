import React, { use } from "react";
import { getProducts } from "./db";
import ProductsList from "./ProductsList";

export default function Products() {
  const { products } = use(getProducts());

  return <ProductsList products={products} />;
}
