"use client"

import { useState, use, useTransition } from "react";

type Product = {
  id: number;
  title: string;
};
type ProductsProps = {
  productsRequest: Promise<{ products: Product[] }>;
  addToCart: Function;
};

export default function Products({ productsRequest, addToCart }: ProductsProps) {
  const [selected, setSelected] = useState<Number[]>([]);
  const { products } = use(productsRequest);
  const [ isLoading, startTransition ] = useTransition();

  function itemClicked(product: Product) {
    const index = selected.indexOf(product.id);
    if (index === -1) {
      setSelected([...selected, product.id]);
    } else {
      setSelected(selected.filter((id) => id !== product.id));
    }
  }
  function buy() {
    startTransition(async () => {
      const { products } = await addToCart(selected);
      alert(`Added ${products} items to cart`);
    })
  }

  if (products.length === 0) {
    return null;
  }
  return (
    <>
      <p>Selected items: {selected.length}</p>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <label>
              <input type="checkbox" onClick={(e) => itemClicked(product)} disabled={isLoading} />
              {product.title}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={buy} disabled={isLoading}>
        Add to cart
      </button>
    </>
  );
}