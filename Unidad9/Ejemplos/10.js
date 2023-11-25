const tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/*const nuevoArray2=tecnologias.map(function(tech){
    if (tech==='HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})*/

const nuevoArray2=tecnologias.filter(tech=>tech !== 'React')

//console.log(nuevoArray2)
console.log(nuevoArray2)