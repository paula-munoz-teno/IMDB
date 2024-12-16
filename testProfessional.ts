import { Professional } from "./Professional";

let professional1 = new Professional("John Doe", 35, 70, 180, false, "American", 2, "Actor");
let professional2 = new Professional("Jane Smith", 28, 60, 165, true, "British", 1, "Director");
let professional3 = new Professional("Carlos García", 45, 80, 175, false, "Mexican", 3, "Producer");
let professional4 = new Professional("Emily Johnson", 30, 55, 170, false, "Canadian", 0, "Screenwriter");
let professional5 = new Professional("Akira Tanaka", 50, 75, 178, true, "Japanese", 5, "Cinematographer");

professional1.mostrarAtributos();
console.log("")
professional2.mostrarAtributos();
console.log("")
professional3.mostrarAtributos();
console.log("")
professional4.mostrarAtributos();
console.log("")
professional5.mostrarAtributos();