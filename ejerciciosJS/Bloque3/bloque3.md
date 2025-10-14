# Bloque de ejercicios 3

## Ejercicios de módulos JavaScript

1. Exportar e importar constantes 
- Crea un archivo constantes.js que contenga varias constantes como el nombre de la app, la versión y el autor. 
Importa esas constantes en app.js y muéstralas en consola. 
```js
export const nombreApp= "Canva";
export const version="1.45.20";
export const autor= "Miguel";
```
```js
import {nombreApp, version, autor} from "./1_constantes.js";
console.log(nombreApp);
console.log(version);
console.log(autor);
```
2. Funciones matemáticas
- En operaciones.js crea y exporta funciones para sumar, restar, multiplicar y dividir. 
En main.js importa esas funciones y prueba varias operaciones. 
```js
export default function suma (a,b){
    return a+b;
}


export function resta (a,b){
    return a-b;
}



export function multiplica (a,b){
    return a*b;
}


export function divide (a,b){
    return a/b;
}
```
```js

import suma from "./3_funciones.js";
import {resta, multiplica, divide} from "./3_funciones.js";

console.log(suma(5,8));
console.log(resta(8,2));
console.log(multiplica(8,9));
console.log(divide(8,2));
```
3. Exportación por defecto
- Crea un archivo saludos.js que tenga una exportación por defecto con una función saludar(nombre). 
Importa esa función en index.js y úsala con tu nombre. 
```js
export default function saludar(nombre){
    return `Hola, ${nombre}`;
}
```
```js
import saludar from "./5_saludos.js";
console.log(saludar("Patricia"));
```
4. Combinar exportaciones
- En utils.js exporta: 
Una constante llamada APP_NAME. 
Una función mayusculas(texto) que convierta un string a mayúsculas. 
Haz una exportación por defecto con una función que reciba un array de strings y devuelva el primero. 
En app.js importa todo y pruébalo.
```js
export const APP_NAME= "Canva";

export function mayusculas (texto){
    return texto.toUpperCase();
}

export default function primero(array){
    return array[0];
}
```
```js
import primero from "./7_utils.js";
import {APP_NAME,  mayusculas }from "./7_utils.js";
console.log(primero(["manzana","pera","naranja"]));
console.log(APP_NAME);
console.log(mayusculas("manzana"));
```

5. Importar con alias
- En matematicas.js exporta dos funciones: areaCirculo(radio) y areaCuadrado(lado). 
En main.js importa esas funciones con alias (circulo, cuadrado) y calcula las áreas de un círculo de radio 5 y un cuadrado de lado 4. 
```js
export function areaCirculo(radio){
    return Math.PI *radio **2;
}

export function areaCuadrado(lado){
    return lado*lado;
}
```
```js
import {areaCuadrado as cuadrado, areaCirculo as circulo} from "./8_matematicas.js";
console.log(cuadrado(4));
console.log(circulo(5));
```
 6. Importar todo con * as
 - En personas.js exporta varias constantes con nombres de personas. 
En main.js impórtalas todas bajo un objeto: 
```js
export const persona1="Patricia";
export const persona2="Lucía";
export const persona3="Laura";
export const persona4="Sandra";
```
```js
import * as personas from "./9_personas.js";
console.log(personas); 
```
