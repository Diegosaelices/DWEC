const formulario = document.getElementsByClassName("formu")[0]

formulario.addEventListener("submit", e=>{
  e.preventDefault()

  hacerLogin()
    
})
  
async function hacerLogin(){

  const username = formulario.querySelector(".form .grupo #nameid").value
  const passwd = formulario.querySelector(".form .grupo #passid").value  

  let entrar = true

  const validar = await (await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)).json()



      if (validar.length==0){
        alert("Error Usuario")
        entrar=false
      }


      if (validar[0].address.zipcode!=passwd){
        alert("Error Contraseña")
        entrar=false
      }


      if (entrar){
        alert("Usuario validado")
        window.open("blog.html")
      }
}






