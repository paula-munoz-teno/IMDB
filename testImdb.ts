import { Professional } from "./Professional";
import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import { writeFileSync, readFileSync } from "fs";


let professional1 = new Professional("Robert Downey Jr.", 56, 75, 174, false, "American", 2, "Actor");
let professional2 = new Professional("Chris Evans", 42, 83, 183, false, "American", 0, "Actor");
let professional3 = new Professional("Scarlett Johansson", 38, 57, 160, false, "American", 1, "Actress");

let profesionalD1 = new Professional("Anthony Russo", 51, 80, 180, false, "American", 2, "Director");
let profesionalW1  = new Professional("Christopher Markus", 54, 75, 175, false, "American", 0, "Screenwriter");



let professional4 = new Professional("Leonardo DiCaprio", 48, 75, 183, false, "American", 1, "Actor");
let professional5 = new Professional("Joseph Gordon-Levitt", 42, 70, 180, false, "American", 0, "Actor");
let professional6 = new Professional("Elliot Page", 36, 68, 165, false, "Canadian", 0, "Actor");

let profesionalD2 = new Professional("Christopher Nolan", 53, 85, 183, false, "British", 1, "Director");
let profesionalW2 = new Professional("Christopher Nolan", 53, 85, 183, false, "British", 1, "Director");



let movie1 = new Movie(
    "Avengers: Endgame",
    2019,
    "American",
    "Action, Adventure, Sci-Fi"
);

movie1.actors=[professional1, professional2, professional3];
movie1.director=profesionalD1;
movie1.writer=profesionalW1;
movie1.language="English";
movie1.plataforma="Disney+";
movie1.isMCU=true;
movie1.mainCharacterName="Tony Stark";
movie1.producer="Kevin Feige";
movie1.distributor="Walt Disney Studios Motion Pictures";



let movie2 = new Movie(
    "Inception",
    2010,
    "American",   
    "Action, Sci-Fi, Thriller"
);

movie2.actors=[professional4,professional5, professional6];
movie2.director=profesionalD2;
movie2.writer=profesionalW2;
movie2.language="English";
movie2.plataforma="Netflix";
movie2.isMCU=false;
movie2.mainCharacterName="Dom Cobb";
movie2.producer="Emma Thomas, Christopher Nolan";
movie2.distributor="Warner Bros.";


let imdb = new Imdb([movie1, movie2]);

// Mostrar las películas en la consola
imdb.mostrarPeliculas();



// 1. Convertir a un string el objeto Imdb
const imdbString = JSON.stringify(imdb, null, 2); // El segundo parámetro es para formatear el JSON

// 2. Guardar dicho objeto en un fichero JSON
writeFileSync("imdbBBDD.json", imdbString, "utf8");


//3. Leer el fichero “imdbBBDD.json” y almacenarlo en una instancia de la clase Imdb
// - PISTA: readFileSync(path[, options])
// - PISTA: JSON.parse()

const data = readFileSync("imdbBBDD.json", "utf8"); // Leer el archivo JSON
const imdbData = JSON.parse(data); // Convertir el string JSON a objeto

// Crear una nueva instancia de Imdb con los datos leídos
const imdbFromFile = new Imdb(imdbData.arrayMovie);

// Mostrar las películas leídas desde el archivo
console.log("Películas leídas desde el archivo:");
imdbFromFile.mostrarPeliculas();