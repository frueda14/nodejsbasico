// esto es de la clase de export import en Platzi
// requiere importa el archivo indicado como parametro y permite que sea utilizable para
// el proyecto
// la accion de asignar a una const math la ruta con el archivo es considerada export
const math  = require("./math.js");
// si el comando "require" recibe como parametro un directorio
// lo primero que intenta hacer es buscar algun archivo index.js
// para luego ejecutar o procesar lo que alli encuentre e importar los
// modulos a los que haya lugar
const greet = require("./greetings");
const hello = require("./greetings/hello.js");

console.log("Inicio de calculos super complejos ...");
console.log(math.add(4, 5));
console.log(math.divide(4, 5));
console.log(math.multiply(4, 5));
console.log(math.substract(4, 5));
console.log("Terminado ...");

console.log(greet.greet("Fabian"));
console.log(hello.sayHello("Fabian"))