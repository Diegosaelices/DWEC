class Persona{
    constructor(nombre,apellidos,anno){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.anno=anno;
    }

    get annoNacimiento(){
        return this.anno;
    }

    obtenerNombre() {
        return this.nombre;
      }
    
      obtenerApellidos() {
        return this.apellidos;
      }
    
      obtenerAnno() {
        return this.anno;
      }
      
}

//Array de objetos

const personas = [
    new Persona("Juan", "Perez", 1990),
    new Persona("Maria", "Gomez", 1985),
    new Persona("Carlos", "Lopez", 2000)
  ];


  

const persona1=new Persona("Jose","Garcia","1999");

// Crear un array de objetos con la clase persona, añadir los metodos par obtener uno de los atributos, hacer un 
//bucle con una funcion flecha que permita obtener dos atributos a elegir.



const obtenerDosAtributos = (persona, atributo1, atributo2) => {
    const valorAtributo1 = persona[atributo1];
    const valorAtributo2 = persona[atributo2];
    
    return { [atributo1]: valorAtributo1, [atributo2]: valorAtributo2 };
  };
  
  
  const personaEjemplo = personas[0]; // Seleccionar una persona del array
  const atributosSeleccionados = obtenerDosAtributos(personaEjemplo, "nombre", "anno");
  
  console.log(atributosSeleccionados); // Mostrar los atributos seleccionados