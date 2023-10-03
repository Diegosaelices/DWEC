/*Funciones anónimas */

let funcion=function(parametro){
    return parametro+":)";
}

console.log(funcion("Hola"));

/*Callback */

function getIdentificacion(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

let formatoNIF=function(numero,letra){
    return numero+"-"+letra;
}

let formatoNIE=function(numero,letra){
    return  letra+"-"+numero;
}

console.log(getIdentificacion("06294487","P",formatoNIF));

/*Forma mas utilizada de Callbacks */

function getIdentificacion2(numero,letra,callback){
    let identificacion=callback(numero,letra);
    return identificacion;
}

getIdentificacion2("7389","D",function(numero,letra){
    console.log(numero+"-"+letra);
    return numero+"-"+letra;
});

/*Funciones autoinvocadas */

(function(numero,letra){
    console.log(numero+"-"+letra);

})("8397438","T");
