window.addEventListener("DOMContentLoaded",function(){
    const email=document.querySelector("#email");
    const formulario=document.querySelector("#formulario");
    const cp=document.querySelector("#cp");

    formulario.addEventListener("submit",function(evento){
        evento.preventDefault();
        evento.stopPropagation();

        let valido=true;

        if(!validaEmail(email)){
            valido=false;
        }

        if(!validaCP(cp)){
            valido=false;
        }

        if (valido){
            this.submit();
        }

        //*****Con expresiones regulares********
        
        function validaEmail(el){
            const erMail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;  // expresion regular email
                if(erMail.test(el.value.trim())){  // con esto limpias la entrada y comprueba si el contenido del value encaja con el patron
                 marcarValido(el);
                return true;
                }else{
                    marcarError(el,"el email no tiene formato valido");
                    return false;
                 }   
         }   

        function validaCP(el){
            const erCP=/^[0-5][0-9]{4}$/;
            const cpvalue=el.value.trim(); //lo limpiamos de huecos blancos
            if(cpvalue.match(erCP)){
                marcarValido(el);
                return true;
            }else{
                marcarError(el,"El CP no es correcto");
                return false;
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
})