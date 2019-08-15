const fs = require("fs");
const ops = require("./src/fileops.js");

fs.readFile("./resources/number.txt", "utf8", (err, text) => {
    if (err) throw err;
    //.map(n => Number(n)) convierte los elementos del array en numeros
    //The map() method calls the provided function once for each element in an array, 
    //in order. Note: map() does not execute the function for array elements without values.
    const numbers = text.split("\n").map(n => Number(n));
    incValues = ops.incrementValues(numbers);
    fs.writeFile("./resources/numbernew.txt", incValues.join("\n"), (err, resultado) => {
        if (err) throw err;
    });
});


fs.readFile("./resources/name.txt", "utf8", (err, text) => {
    if (err) throw err;
    const peopleName = text.split("\n");
    peopleSalutes = ops.callNames(peopleName);
    fs.writeFile("./resources/namenew.txt", peopleSalutes.join("\n"), (err, resultado) => {
        if (err) throw err;
    });
});