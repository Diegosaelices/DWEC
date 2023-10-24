window.addEventListener("load", function(){
    const formulario=document.querySelector("#formulario");
    const usuario=document.querySelector("#user");
    const passwd=document.querySelector("#passwd");
    const newpasswd=document.querySelector("#newpasswd");
    const fechaNac=document.querySelector("#fechaNac");
    const condiciones=document.querySelector("#condiciones");

    formulario.addEventListener("submit", evento=>{
        evento.preventDefault();
        evento.stopPropagation();

        let valido=true;

        if(!validaUser(usuario)){
            valido=false;
        }
        if(!validapasswd(passwd)){
            valido=false;
        }
        if(!validaPasswd2(newpasswd,passwd)){
            valido=false;
        }
        if(!validafechaNac(fechaNac)){
            valido=false;
        }
        if(!validaCheck(condiciones)){
            valido=false;
        }
        if(valido){
            formulario.submit();
        }
    });

    function validaUser(el){
        if(!el.value){
            marcarError(el,"No has introducido usuario");
            return false;
        }else{
            marcarValido(el);
            return true;
        }
    }

    function validapasswd(el){
        if(el.value.length < 7){
            marcarError(el,"La contraseña debe tener al menos 7 caracteres");
            return false;
        }else{
            marcarValido(el);
            return true;
        }
    }

    function validaPasswd2(newpasswd,oldPass){
        if(newpasswd.value==oldPass.value){
            marcarValido(newpasswd);
            return true;
        }else{
            marcarError(newpasswd, "Las contraseñas no coinciden")
            return false;
        }
    }

    function validaCheck(el){
        if(!el.checked){
            marcarError(el, "Tienes que aceptar las condiciones");
            return false;
        }else{
            marcarValido(el);
            return true;
        }
    }

    function validafechaNac(el){
        if(!el.value){
            marcarError(el, "No has introducido fecha")
            return false;
        }else{
            marcarValido(el);
            return true;
        }
    }

    function marcarError(el, mensaje){
        el.parentNode.querySelector(".error-feedback").textContent=mensaje;
        el.parentNode.classList.add("Error");
    }

    function marcarValido(el){
        el.parentNode.querySelector(".error-feedback").textContent="";
        el.parentNode.classList.remove("error");
    }

})