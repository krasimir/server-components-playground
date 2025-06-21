'use client';

import { useState, useActionState } from "react";

type Product = {
  id: number;
  title: string;
}

export default function Products({ products, addToCart }: { products: Product[]; addToCart: any }) {
  const [selected, setSelected] = useState<Number[]>([]);
  const [state, action, isPending] = useActionState(addToCart, null);

  function itemClicked(product: Product) {
    const index = selected.indexOf(product.id);
    if (index === -1) {
      setSelected([...selected, product.id]);
    } else {
      setSelected(selected.filter((id) => id !== product.id));
    }
  }

  return (
    <>
      <p>Selected items: {selected.length}</p>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <label>
              <input type="checkbox" onClick={(e) => itemClicked(product)} />
              {product.title}
            </label>
          </li>
        ))}
      </ul>
      <form action={action}>
        <input type="hidden" name="selectedProducts" value={selected.join(",")} />
        <button disabled={isPending}>{isPending ? 'Saving...' : 'Add to cart'}</button>
        {state && <p>Form state: {state}</p>}
      </form>
    </>
  );
}