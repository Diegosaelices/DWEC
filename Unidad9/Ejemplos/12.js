//Ternarios
const autenticado=true

autenticado ?
    console.log('usuario autenticado'):
    console.log('No autenticado, dirigir hacia login')

//Doble ternario (siempre evaluan primero true y luego false)
const saldo=600
const pagar=800
const tarjeta=false

saldo > pagar ?
console.log('Puedes pagar con saldo') :
    tarjeta ?
    console.log('Puedes pagar con tarjeta'):
    console.log('No puedes pagar con tarjeta')