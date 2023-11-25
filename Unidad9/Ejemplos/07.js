//Iteradores en JS
const tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//forEach - Acceder a cada elemento del array (como si lo copiaramos)
const arrayForeach=tecnologias.forEach(function(tech){
    return tech
})

//crear un nuevo array copiando el anterior (igual que lo de arriba pero esto es mas aconsejable)
const arrayMap=tecnologias.map(function(tech){
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)