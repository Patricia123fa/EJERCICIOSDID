//Suma de precios (reduce)

export async function totalElectronics() {
  const res = await fetch("https://fakestoreapi.com/products");
  const productos = await res.json();
  const electronicos = productos.filter(p => p.category === "electronics");
  const total = electronicos.reduce((s, p) => s + Number(p.price), 0);
  return { total, count: electronicos.length, items: electronicos };
}

