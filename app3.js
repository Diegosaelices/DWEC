//typeof  Te devuelve el tipo de variable que es
const num=20;
console.log("El tipo de la variable es "+typeof num);

//NaN
const variable= 4*"hola";
console.log("El tipo de la variable es "+variable); //devuelve NaN porque no es un número

//Infinity
const division=4/0;
console.log(division);
console.log("El tipo de division es: "+typeof division);

//isNaN
const numberstring="30";
const string="20 años";
console.log(isNaN(variable)); //devuelve si es verdadero o falso
console.log(isNaN(division)); //devuelve false porque aunque es un numero, es infinito
console.log(isNaN("12")); //devuelve false porque aunque sea un string, no tiene letras y lo interpreta como numero
console.log(isNaN(12));//devuelve false porque es un numero
console.log(isNaN(numberstring));//devuelve false porque es un numero
console.log(isNaN(string));//devuelve false porque es una cadena de caracteres
console.log(isNaN(NaN));

//toString  Sirve para pasar de numero a cadena
const number=100;
console.log(number);
console.log(number.toString());
console.log(typeof number);
console.log(typeof number.toString());

//toFixed
console.log(number.toFixed(2));

//Realizar un script que calcule cuanto toca pagar a cada persona una cena que cuesta 102€ y han asistido 6 personas
const precio=102;
let porpersona=0;

porpersona=102/6;
console.log("El precio por persona es: "+porpersona.toFixed(2));

//Funcion Boolean devuelve True
console.log(Boolean(1));
console.log(Boolean("Cosas"));
console.log(Boolean(1.78));
console.log(Boolean(100>5));
console.log(Boolean(1=="1"));

//Funcion Boolean deuelve False
console.log(Boolean(0)); //o menos
console.log(Boolean("")); //cadena vacia
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean("1"===1));
console.log(Boolean(undefined));

