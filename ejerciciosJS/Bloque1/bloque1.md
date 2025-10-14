# Bloque de ejercicios 1

## Declaración de variables, tipos de datos, objetos y funciones.

1. Declaración de variables: nombre, constante PI, y edad.
- Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.
```js
let nombre="Patricia";
console.log(nombre);
```
- Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.
```js
const PI= 3.1416;
console.log(PI);
```
- Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
```js
let edad;
console.log(edad);
edad=33;
console.log(edad);
```
2. Diferentes tipos de datos: typeof, y cadenas.
- Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof
```js
let nombre="Patricia";
console.log(typeof nombre);
let edad=33;
console.log(typeof edad);
let estudiante=true;
console.log(typeof estudiante);
let altura=null;
console.log(typeof altura);
let peso; 
console.log(typeof peso);
```
- Convierte un número a cadena usando String() y una cadena a número usando Number().
```js
let num = 3;
let texto = String(num);
console.log(texto); 

let cadena = "25";
let num2 = Number(cadena);
console.log(num2); 
```
3. Objetos: crear objetos con diferentes propiedades y desestructuración.
- Crea un objeto persona con propiedades: nombre, edad, ciudad
```js
let persona = {
    nombre:"Patricia",
    edad:33, 
    ciudad:"Gijon"
};
console.log(persona);
```
-Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).
```js
console.log(persona.nombre);
console.log(persona["edad"]);
```
- Añade una nueva propiedad profesion al objeto persona
```js
persona.estudiante=true;
console.log(persona.estudiante);
``` 
- Usa desestructuración para extraer nombre y edad en variables e imprimelas
```js
const {nombre,edad} = persona;
console.log(nombre);
console.log(edad);
```
4. Funciones: crear diferentes funciones. Funciones con flecha.
- Crea una función saludar(nombre) que devuelva "Hola, ".
```js 
function saludar(nombre){
    console.log("Hola, ");
}
return saludar(nombre);
```
- Crea una función sumar(a, b) que devuelva la suma de dos números.
```js
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 4));
```
- Escribe una función flecha que multiplique dos números
```js
const multiplicar = (a,b) => a*b;
console.log (multiplicar(3,4));
```
- Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.
```js
function esMayorEdad(edad) {
  return edad >= 18;
}

console.log(esMayorEdad(20));
```
