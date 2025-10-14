//objetos

let persona = {
    nombre:"Patricia",
    edad:33, 
    ciudad:"Gijon"
};
console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);

persona.estudiante=true;
console.log(persona.estudiante);

const {nombre,edad} = persona;
console.log(nombre);
console.log(edad);
