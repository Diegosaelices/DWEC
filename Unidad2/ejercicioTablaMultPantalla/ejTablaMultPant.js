var numero=prompt("Dime un numero")
    var numero1=0
    var cont=0

    if(isNaN(numero)){
        alert("Eso no es un numero");
    }else if (numero<0){
        alert("Ese numero es menor que 0");
    }else {
        document.write("<ul>\n");
        while (cont<=10){
            document.write("<li>"+numero1+ " x "+numero+" = "+numero*numero1 +"</li>");
            cont++;
            numero1++;
        }
        document.write("</ul>");
    }

