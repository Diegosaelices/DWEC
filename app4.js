/*OPERACIONES CON CADENAS DE TEXTO */

//Concatenar texto
let nombre="Pepe";
let apellido="Mosca";
let nombre_completo=nombre+" "+apellido;
console.log(nombre_completo);

//Template literals
let curso="VS2DAW";
let nombre_apellido=`Hola ${nombre} ${apellido}`;//tener en cuenta las comillas
console.log(nombre_apellido);
let saludo=`Hola ${nombre} ${apellido}, bienvenido al curso ${curso}`;
console.log(saludo);

//Lenght
console.log(nombre.length);

//.includes(subcadena)
console.log(saludo.includes("bien55id"));
console.log(saludo.includes("bienvenido al"));

//.slice (start, end)
console.log(saludo.slice(12,17));

//.replace("este texto", "por este otro")
console.log(saludo.replace("Hola Pepe", "Hola Javi"));

//.trim  elimina los espacios en blanco al principio y al final
let cadena="     hola,  mundo que      tal    ";
console.log(cadena.trim());