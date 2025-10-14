//Desestructuración de arrays

let frutas=  ["manzana", "pera", "platano","naranja"];
let [fruta1, fruta2, ...resto]=frutas;
console.log(fruta1);
console.log(fruta2);
console.log(resto);

let a=100;
let b=200;
[a,b]=[b,a];
console.log(a,b);

let colores= ["rojo",["verde", "azul", "amarillo"]];
let [, [, colorAzul]] = colores;
console.log(colorAzul);