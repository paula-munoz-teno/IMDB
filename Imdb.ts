
import { Movie } from "./Movie";
export class Imdb
{
    // Definición de atributos (qué atributos tiene la clase)
  
    public arrayMovie: Movie[];
    
    // Implementación del constructor (permite darle valor inicial a los atributos, valores por defecto)
   
    constructor(arrayMovie: Movie[])
    {
        this.arrayMovie = arrayMovie;
    }

    //método
    public mostrarPeliculas(): void {
        this.arrayMovie.forEach((movie) => {
            movie.mostrarAtributos();
            console.log("\n"); 
        });
    }


}