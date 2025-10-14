//Recorridos con forEach, filter y map

//ejercicio 1
let nombres= ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(nombre => {
    console.log(`Hola!, ${nombre}`)
});

//ejercicio 2
let numeros= [2,4,6,8];
numeros.forEach(num => {
    console.log(num*2)
});

//ejercicio 3
let numeros2= [5,12,8,130,44];
let mayores=numeros2.filter(num => num>10);
console.log(mayores);

//ejercicio 4
let nombres2= ["Ana", "Alberto","Bea", "Carlos"];
let conA= nombres2.filter(nombre => nombre.startsWith("A"));
console.log(conA);

//ejercicio5
let edades=[15, 18, 21, 12, 30];
let mayoresEdad=edades.filter(edad => edad>=18);
console.log(mayoresEdad);

//ejercicio6
let num=  [1, 2, 3, 4, 5];
let cuadrado=num.map(n => n**2);
console.log(cuadrado);

//ejercicio 7
let precios= [1, 2, 3, 4, 5];
let conIva= precios.map(pvp=> pvp*1.21);
console.log(conIva);

//ejercicio8
let mayusculas =  ["html", "css", "javascript"];
let mayus=mayusculas.map(may => may.toUpperCase());
console.log(mayus);

//ejercicio9
let numeros3=  [3, 8, 12, 5, 7, 20];
let pares= numeros3.filter(num=> num%2 === 0);
let pares2=pares.map(num=> num*10);
console.log(pares2);

//ejercicio10
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