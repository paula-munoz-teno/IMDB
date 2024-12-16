import { Professional } from "./Professional";
import { Movie } from "./Movie";

// Crear varios objetos de la clase Movie

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



movie1.mostrarAtributos();
console.log("\n"); 
movie2.mostrarAtributos();


