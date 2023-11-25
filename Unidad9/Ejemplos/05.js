//Operaciones en los arreglos
const tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos al array
tecnologias.push('GraphQL')//Añade al final del array
console.log(tecnologias);
tecnologias.unshift('GraphQL')//Añade por delante del array
//Si estamos programando con react, no es aconsejable utilizar push y unshift

const nuevoArreglo=[...tecnologias, 'graphQL']
const nuevoArreglo1=['graphQL', ...tecnologias] //estas opciones son mas recomendables que las anteriores

//Eliminar elementos del array
tecnologias.pop() //Elimina del final
tecnologias.shift() //Elimina del principio
// tecnologias.splice(2, 3) //Elimina de una posicion específica

// Ejecuta la funcion tantas veces como elementos tenga el array

const nuevoArray=tecnologias.filter(function(tech){
    console.log(tech)
    return tech==='React'
})

//Reemplazar del array (no es aconsejable)
// tecnologias[0]= 'GraphQL'

//Reemplazar del array de forma aconsejable
//Este array tendra los mismo elementos solo que cambiando HTML por GraphQL
const nuevoArray2=tecnologias.map(function(tech){
    if (tech==='HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray2)