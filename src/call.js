module.exports = {
    sync: function(nombre) {
        return `Hola ${nombre}! Bienvenido a Node.js`;
    },
    withCallback: function(nombre, cb) {
        setTimeout(()=>{
            console.log(cb(nombre))
        }, 5000);
    },
    // Promise, resolve y reject son parametros establecidos para el uso de Promesas
    withPromise: function(nombre) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(nombre);
            }, 5000); 
        })
    }
}