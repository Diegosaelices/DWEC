//Manipular elementos HTML con Js

const heading=document.querySelector('.heading')
heading.textContent='Un nuevo heading'
console.log(heading.textContent)

const inputNombre=document.querySelector('#nombre')
inputNombre.value='un valor por default'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.textContent='Nuevo Enlace')