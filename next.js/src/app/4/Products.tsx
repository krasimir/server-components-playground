'use client';

import { useState } from 'react';

type Product = {
  id: number;
  title: string;
}

export default function Products({ products, addToCart }: { products: Product[]; addToCart: Function }) {
  const [selected, setSelected] = useState<Number[]>([]);

  function itemClicked(product: Product) {
    const index = selected.indexOf(product.id);
    if (index === -1) {
      setSelected([...selected, product.id]);
    } else {
      setSelected(selected.filter((id) => id !== product.id));
    }
  }
  async function buy() {
    const response = await addToCart(selected);
    console.log(response);
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
      <button onClick={buy}>Add to cart</button>
    </>
  );
}