const call = require("./src/call.js");


//call.greet("Fabian Rueda");

/* esto se puede escribir de otra forma utilizando async y await
call.withPromise("Fabian", "Rueda")
    .then(n=>console.log(n)); */

async function callWithPromise()
{
    // await indica que espere hasta que la promesa se ejecute 
    const fullName = await call.withPromise("Fabian", "Rueda");
    console.log(fullName);
}

callWithPromise();