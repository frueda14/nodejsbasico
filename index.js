const call = require("./src/call.js");


//console.log(call.sync("Fabian"));
// arrow function ()=>
/*
call.withCallback("Fabian R", ()=> {
    call.sync
});
*/

//call.withCallback("Fabian Rueda", call.sync);
// Pending Succesfull o Rejected --> Estos son los 3 estados que manejan las promesas
//console.log(call.withPromise("Frq"));

// el .then es utilizado cuando se llaman promesas, en ese bloque se obtiene la respuesta
// y se hace algo con dicha respuesta, en esta caso imprimir el nombre.
call.withPromise("Frq")
    .then
    (
        name=>
        {
            console.log(name);
        }
    );