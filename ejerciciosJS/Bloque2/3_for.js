//Arrays con for

let numeros=[1,2,3,4,5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
}

let numeros2=[1,2,3,4,5];
for (let num of numeros2) {
    console.log(num);
}

let numeros3=[1,2,3,4,5];
for (let i in numeros3) {
   if (i>=1) {
    console.log(i, numeros3[i]);
   }
}

let posicion= ["html","css","JavaScript","React"];
for (let i = 0; i < posicion.length; i++) {
    console.log(`Índice ${i}: Valor ${posicion[i]}`);
    
}

