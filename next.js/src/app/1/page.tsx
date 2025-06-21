import Navigation from "../components/Navigation";
import { getProducts } from "../utils";

export default async function App() {
  const products = await getProducts();

  return (
    <>
      <Navigation />
      <h1>Holla!</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <label>
              <input type="checkbox" />
              {product.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
