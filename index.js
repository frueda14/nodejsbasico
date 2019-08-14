// los modulos locales importados al proyecto, pueden ser usados aqui cowsay por ejemplo
// para los modulos externos que esten dentro de node_modules podemos hacer referencia
// a ellos simplemente llamandolos por su nombre.

// con esta declaracion ya podemos utilizar el modulo cowsay, Ojo se importan nombres sin rutas
const cowsay = require("cowsay");


console.log(cowsay.say({
	text : "Hello I'm cowsay",
	e : "@-@",
	T : "U "
}));