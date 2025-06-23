import { Suspense } from "react";
import Products from "./Products";

export default function App() {

  return (
    <>
      <header>
        <h1>Hello world</h1>
      </header>
      <Suspense>
        <Products />
      </Suspense>
      <footer>I'm a footer</footer>
    </>
  );
}
