
//RETO 1
export class Professional
{
    // Definición de atributos (qué atributos tiene la clase)
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

   

    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
   
    constructor(name: string, age: number, weight: number,
                height: number, isRetired: boolean,
                nationality: string, oscarsNumber: number,
                profession: string){
    this.name = name;
    this.age =  age;
    this.weight = weight;
    this.height = height;
    this.isRetired = isRetired;
    this.nationality = nationality;
    this.oscarsNumber = oscarsNumber;
    this.profession = profession;
    }

    // Implementación de los métodos

//GET
    public mostrarAtributos():void{
        console.log("Nombre:" + this.name)
        console.log("Edad:" + this.age)
        console.log("Peso:" + this.weight+ "kg")
        console.log("Altura:" + this.height+ "cm")
        console.log("Retirado:" + this.isRetired)
        console.log("Nacionalidad:" + this.nationality)
        console.log("Número de Oscars:" + this.oscarsNumber)
        console.log("Profesión:" + this.profession)
    }

}


//Comprobación
// let professional = new Professional("John Doe", 35, 70, 180, false, "American", 2, "Actor");

// professional.mostrarAtributos();


//Se hace console.log cuando hay return sin console.log