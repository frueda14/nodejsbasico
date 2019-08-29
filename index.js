/*
El módulo child_process proporciona la capacidad de generar procesos secundarios de manera 
similar, pero no idéntica. 

Esta función la proporciona principalmente la función child_process.spawn ():
*/
const cp = require("child_process");

function execCommand(command)
{
    cp.exec(command, (err, stdout, stderr) => {
        if (err) 
        {
            console.log(`Error: ${err}`);
            return;
        }
        if (stdout) console.log(`Standart output: ${stdout}`);
        if (stderr) console.log(`Standart error: ${stderr}`);
    });
}

//execCommand("ls");
// hay que correr npm install sobre el proyecto para ver si no hacen falta dependencias
execCommand("node ./src/script.js --base=5");