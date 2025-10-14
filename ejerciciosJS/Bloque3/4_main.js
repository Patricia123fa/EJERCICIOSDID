// importacion matematica

import suma from "./3_funciones.js";
import {resta, multiplica, divide} from "./3_funciones.js";

console.log(suma(5,8));
console.log(resta(8,2));
console.log(multiplica(8,9));
console.log(divide(8,2));

import {areaCuadrado as cuadrado, areaCirculo as circulo} from "./8_matematicas.js";
console.log(cuadrado(4));
console.log(circulo(5));

import * as personas from "./9_personas.js";
console.log(personas); 