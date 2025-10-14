# Bloque de ejercicios 4

## Fetch + Promesas + async/await + métodos de arrays 

1. Filtra y transforma posts
- Descarga los posts y quédate solo con los de userId = 1. Devuelve un array de títulos en mayúsculas. 
async function getUppercaseTitlesByUser(userId = 1) { 
 // fetch posts 
 // json 
 // filter por userId 
 // map a títulos en mayúsculas 
} 

```js
async function getUppercaseTitlesByUser(userId = 1) { 
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const filtrar= posts.filter(p=> p.userId=== userId);
    const mayus= filtrar.map(p=> p.title.toUpperCase());
    return mayus;
}
```
2. Suma de precios (reduce)
- Descarga los productos de Fake Store API y calcula el precio total de los productos con category = 'electronics'. 
async function totalElectronics() { 
 // GET https://fakestoreapi.com/products 
 // filter por category === 'electronics' 
 // reduce sumando price 
} 
```js
export async function totalElectronics() {
  const res = await fetch("https://fakestoreapi.com/products");
  const productos = await res.json();
  const electronicos = productos.filter(p => p.category === "electronics");
  const total = electronicos.reduce((s, p) => s + Number(p.price), 0);
  return { total, count: electronicos.length, items: electronicos };
}
```
3. Combinación con Promise.all 
- Descarga usuarios y posts en paralelo. Devuelve una lista de objetos { userName, postsCount }, ordenada descendentemente por postsCount. 
async function usersWithPostCount() { 
 // Promise.all([fetch users, fetch posts]) 
 // Para cada usuario, cuenta cuántos posts tiene 
 // Devuelve [{ userName, postsCount }] ordenado por postsCount desc 
} 
3.  Pipeline: buscar, filtrar, normalizar, ordenar 
- De JSONPlaceholder, toma comments, filtra los que contengan la palabra 'qui' en body, normaliza email a minúsculas, y ordénalos por postId asc y después por email asc. 
async function cleanComments() { 
 // GET /comments 
 // filter body includes 'qui' (case-insensitive) 
 // map: email a minúsculas 
 // sort por postId, luego email 
} 

