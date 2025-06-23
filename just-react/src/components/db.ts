let cache;

export function getProducts() {
  if (cache) {
    return cache;
  }
  return cache = new Promise(async resolve => {
    const res = await fetch("http://localhost:8087/api/products");
    const data = await res.json();
    resolve(data);
  })
}