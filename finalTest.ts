import { Professional } from "./Professional";
import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import { readFileSync, writeFileSync } from "fs";
import * as readlineSync from "readline-sync";

// Función para solicitar datos al usuario
function solicitarDatosProfesional(): Professional {
    const name = readlineSync.question("Nombre: ");
    const age = readlineSync.questionInt("Edad: ");
    const weight = readlineSync.questionInt("Peso (kg): ");
    const height = readlineSync.questionInt("Altura (cm): ");
    const isRetired = readlineSync.keyInYNStrict("¿Está retirado? (s/n): ");
    const nationality = readlineSync.question("Nacionalidad: ");
    const oscarsNumber = readlineSync.questionInt("Número de Oscars: ");
    const profession = readlineSync.question("Profesión: ");

    return new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession);
}

// Leer el archivo JSON
const data = readFileSync("imdbBBDD.json", "utf8");
const imdbData = JSON.parse(data);

// Crear una nueva instancia de Imdb
const imdb = new Imdb(imdbData.arrayMovie);

// Mostrar las películas disponibles
console.log("Películas disponibles:");
imdb.mostrarPeliculas();

// Solicitar al usuario que elija una película
const movieIndex = readlineSync.questionInt("Seleccione el índice de la película a la que desea agregar un profesional (0 para la primera, 1 para la segunda, etc.): ");

// Verificar que el índice sea válido
if (movieIndex >= 0 && movieIndex < imdb.arrayMovie.length) {
    // Solicitar los datos del nuevo profesional
    const nuevoProfesional = solicitarDatosProfesional();

    // Agregar el nuevo profesional a la película seleccionada
    imdb.arrayMovie[movieIndex].actors.push(nuevoProfesional);

    // Guardar la nueva lista de películas en el archivo JSON
    const imdbString = JSON.stringify(imdb, null, 2);
    writeFileSync("imdbBBDD.json", imdbString, "utf8");

    console.log("Nuevo profesional agregado exitosamente.");
} else {
    console.log("Índice de película no válido.");
}