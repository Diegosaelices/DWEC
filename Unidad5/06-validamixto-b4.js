document.addEventListener("DOMContentLoaded", function(evento){

    const usuario=document.getElementById('uname');
    const clave=document.getElementById('pwd');
    const form=document.querySelector('form');

    form.addEventListener('submit', validarFormulario, /*validate*/);

    usuario.addEventListener("keyup", function(e){
        console.log("Ha cambiado el user");
        if(this.value){
            this.setCustomValidity("");
        }else{
            this.setCustomValidity("Campo vacio");
        }
    })

    clave.addEventListener("keyup", function(e){
        console.log("Ha cambiado la psswd");
        if (this.value.length>=6){
            this.setCustomValidity("");
        }else{
            this.setCustomValidity("Contraseña menor de 6 caracteres")
        }
    })

    function validarFormulario(evento){
        evento.preventDefault();
        evento.stopPropagation();
        let valido=true;
        if(!usuario.value){
            usuario.setCustomValidity("Campo vacio");
            valido=false;
        }else{
            usuario.setCustomValidity("");
        }

        if(clave.length<6){
            clave.setCustomValidity("Menor de 6 caracteres")
            valido=false;
        }else{
            clave.setCustomValidity("");
        }

        this.classList.add('was-validated');

        if(valido){
            this.submit;
        }else{
            usuario.setCustomValidity("");
        }
    }

    function validate(inputID){
        const input =document.getElementById(inputID);
        const validityState=input.validity;

        if(validityState.valueMissing){
            input.setCustomValidity("No me has introducido nada");
        }else if (validityState.rangeUnderflow){
            input.setCustomValidity("Necesito un numero mas alto");
        }else if(validityState.rangeOverflow){
            input.setCustomValidity("Ese numero es muy alto")
        }else{
            input.setCustomValidity("");
        }
        input.reportValidity();
    }


})