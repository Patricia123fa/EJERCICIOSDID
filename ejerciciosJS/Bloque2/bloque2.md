# Bloque de ejercicios 2

## Arrays, desdestructuración de arrays y recorridos

1. Arrays y métodos básicos.
- Declara un array con al menos 5 nombres de personas. 
```js
let nombres = ["María", "Lucía", "Marta", "Antonio", "Miguel"];
```
- Añade un nombre al final. 
```js
nombres.push("Manuel");
```
- Elimina el primero. 
```js
nombres.shift();
```
- Busca si existe un nombre concreto con includes(). 
```js
nombres.includes ("Antonio");
```
- Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente. 
```js
let numeros =[4,1,9,3,7];
numeros.sort((a,b) => a-b);
numeros.sort((a,b)=> b-a);
```
2. Desestructuración de arrays

- Extrae en variables fruta1 y fruta2 los dos primeros. 
- Usa el operador rest para guardar el resto en un nuevo array. 
```js
let frutas=  ["manzana", "pera", "platano","naranja"];
let [fruta1, fruta2, ...resto]=frutas;
console.log(fruta1);
console.log(fruta2);
console.log(resto);
```
- Intercambia los valores de dos variables usando desestructuración 
```js
let a=100;
let b=200;
[a,b]=[b,a];
console.log(a,b);
```
- Extrae el color azul del array anidado: 
```js
let colores= ["rojo",["verde", "azul", "amarillo"]];
let [, [, colorAzul]] = colores;
console.log(colorAzul);
```
2. Recorrido de arrays con for
- Crea un array con los números del 1 al 5 y muéstralos en consola con: 
```js
let numeros=[1,2,3,4,5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);  
}
```
-  Un for...of. 
```js
let numeros2=[1,2,3,4,5];
for (let num of numeros2) {
    console.log(num);
}
```
- Un for...in. 
```js
let numeros3=[1,2,3,4,5];
for (let i in numeros3) {
   if (i>=1) {
    console.log(i, numeros3[i]);
   }
}
```
- Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y" 
```js 
let posicion= ["html","css","JavaScript","React"];
for (let i = 0; i < posicion.length; i++) {
    console.log(`Índice ${i}: Valor ${posicion[i]}`);
    
}
```
4. Recorridos forEach, filter y map.
- Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre. 
```js
let nombres= ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre => {
    console.log(`Hola!, ${nombre}`)
});
```
- Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número. 
```js
let numeros= [2,4,6,8];
numeros.forEach(num => {
    console.log(num*2)
});
```
- Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10. 
```js
let numeros2= [5,12,8,130,44];
let mayores=numeros2.filter(num => num>10);
console.log(mayores);
```
- Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A. 
```js
let nombres2= ["Ana", "Alberto","Bea", "Carlos"];
let conA= nombres2.filter(nombre => nombre.startsWith("A"));
console.log(conA);
```
- Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18). 
```js
let edades=[15, 18, 21, 12, 30];
let mayoresEdad=edades.filter(edad => edad>=18);
console.log(mayoresEdad);
```
- Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado 
```js
let num=  [1, 2, 3, 4, 5];
let cuadrado=num.map(n => n**2);
console.log(cuadrado);
```
- Crea un array con precios [1, 2, 3, 4, 5] y usa map para calcular el precio con IVA (21%) incluido 
```js
let precios= [1, 2, 3, 4, 5];
let conIva= precios.map(pvp=> pvp*1.21);
console.log(conIva);
```
- Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra. 
```js
let mayusculas =  ["html", "css", "javascript"];
let mayus=mayusculas.map(may => may.toUpperCase());
console.log(mayus);
```
- Dado el array [3, 8, 12, 5, 7, 20]:  Usa filter para quedarte con los pares. Luego, usa map para multiplicarlos por 10
```js
let numeros3=  [3, 8, 12, 5, 7, 20];
let pares= numeros3.filter(num=> num%2 === 0);
let pares2=pares.map(num=> num*10);
console.log(pares2);
```
- Dado el array de objetos: 

let alumnos = [ 
 { nombre: "Ana", nota: 7 }, 
 { nombre: "Luis", nota: 4 }, 
 { nombre: "Marta", nota: 9 } 
]; 

Filtra solo los alumnos con nota ≥ 5. Usa map para obtener un array solo con sus nombres. Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE" 
```js
let alumnos = [ 
 { nombre: "Ana", nota: 7 }, 
 { nombre: "Luis", nota: 4 }, 
 { nombre: "Marta", nota: 9 } 
]; 
let notas= alumnos.filter(nota=> alumnos.nota>=5);
let aprobados= notas.map(nombre=> alumnos.nombre);
aprobados.forEach(nombre => {
    console.log(`Alumno aprobado: ${nombre}`);
});
```
