
import { Professional } from "./Professional";

export class Movie
{
    // Definición de atributos (qué atributos tiene la clase)
  
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
   
    constructor(title: string,releaseYear: number, 
                nacionality: string,
                genre: string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = []; // Inicializa como un array vacío
        this.nacionality = nacionality;
        this.director = new Professional("", 0, 0, 0, false, "", 0, ""); 
        this.writer = new Professional("", 0, 0, 0, false, "", 0, ""); 
        this.language = ""; // Inicializa como cadena vacía
        this.plataforma = ""; // Inicializa como cadena vacía
        this.isMCU = false; // Inicializa como false
        this.mainCharacterName = ""; // Inicializa como cadena vacía
        this.producer = ""; // Inicializa como cadena vacía
        this.distributor = ""; // Inicializa como cadena vacía
        this.genre = genre;
    }


    // Implementación de los métodos


    public mostrarAtributos():void{
        console.log("Title: " + this.title);
        console.log("Release Year: " + this.releaseYear);
        console.log("Actors: ");
        this.actors.forEach(actor => {
            console.log(" - " + actor.name);
        });
        console.log("Nationality: " + this.nacionality);
        console.log("Director: " + this.director.name);
        console.log("Writer: " + this.writer.name);
        console.log("Language: " + this.language);
        console.log("Platform: " + this.plataforma);
        console.log("Is MCU: " + this.isMCU);
        console.log("Main Character Name: " + this.mainCharacterName);
        console.log("Producer: " + this.producer);
        console.log("Distributor: " + this.distributor);
        console.log("Genre: " + this.genre);
    }

}






//Comprobación
// let professional = new Professional("John Doe", 35, 70, 180, false, "American", 2, "Actor");

// professional.mostrarAtributos();


//Se hace console.log cuando hay return sin console.log