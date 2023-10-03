/* Estructura de condiconal */
const flight=100;
const hotel=50;
const tour=30;
const total=flight+hotel+tour;
const budget=300;

if (budget > total){
    console.log("Si me voy de viaje");
} else if (budget===total) {
    console.log("Me puedo ir de viaje con el dinero justo");
}else {
    console.log("No me puedo ir de viaje");
}

/* Operadores ternarios */
 const result= budget > total ? console.log("Si me voy"):console.log("No me voy")
 //const newresult = budget > total ? tour=50 : tour=20; //cambias el valor del tour

 //EJERCICIO DE PRACTICA saber si NUM es un número par o impar, comprobando primero si es un número

 const NUM = "30" + 3;

 if (isNaN(NUM)){
    console.log("No es un número")
 } else{
    if (NUM%2==0){
        console.log("Es un numero par");
    }else {
        console.log("Es un numero impar");
    }
 }

 //Ejercicio de práctica. Si la cadena es mas larga de 27 caracteres debo dejarla en 27, en caso de que sea menor debo de añadir carácteres 
 //hasta que llegue a 27. Realizar todas las comprobaciones posibles para cumplir con las especificaciones.

const cade="En un lugar de La Mancha, de cuyo nombre";

if (isNaN(cade)){
    if (cade.length==27){
        console.log(cade);
    }else if (cade.length<27){
        for (i=0;cade.length>=27;i+1){
            console.log(cade+"*")
        }
    }else if (cade.length>27){
        console.log(cade.slice(0, 28));
    }
    
}