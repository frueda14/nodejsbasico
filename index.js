const readline = require("readline");
// se crea una interfaz de entrada y salida
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const q = [
    "Cual es tu primer nombre ? ",
    "Cual es tu primer apellido ? ",
    "Cual es tu edad ? "
];

const AskQuestion = (rl, question) => 
{
    return new Promise((resolve, rej) => 
    {
        rl.question(question, answer => 
        {
            resolve(answer);
        })
    });
};

const Ask = function(questions)
{
    return new Promise(async resolve => 
    {
        let results = [];
        for (let i = 0; i < questions.length; i++)
        {
            // importante el await al momento de llamar AskQuestion await indica
            // que el programa debe esperar hasta que termine su ejecucion
            // si lo quitamos el programa ejecuta y sigue con las demas lineas
            // de codigo
            const result = await AskQuestion(rl, questions[i]);
            results.push(result);
        }
        rl.close();
        resolve(results);
    });
};

// "resultado" usado en el then, es el resultado obtenido despues de la ejecucion
Ask(q)
    .then(resultado => 
    {
        console.log(`Hola ${resultado[0]} ${resultado[1]} tu edad es: ${resultado[2]}`);
    });