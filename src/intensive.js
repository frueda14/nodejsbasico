const loopLimit = 1e10;
module.exports = {
    simulateSync: function(){
        console.log('Comenzando bloqueo simulado...');
        for(let i = 0; i <= loopLimit; i += 1) {
            // Simulación para operación intensiva
            //  - Cifrado
            //  - Compresión
            //  - Proceso de datos
            //  - Petición HTTP
            //  - Query a base de datos
            if (i === loopLimit) console.log("He llegado al final!");
        }
        console.log('El bucle ha finalizado!');
    },
    simulateAsync: function(){
        console.log('Comenzando bloqueo simulado...');
        // setInmmediate delega inmadiatamente y ejecuta
        // node inicia con la ejecucion pero no espera a 
        // que termine sino que continua con la ejecucion
        setImmediate(()=>{
            for(let i = 0; i <= loopLimit; i += 1) {
                // Simulación para operación intensiva
                //  - Cifrado
                //  - Compresión
                //  - Proceso de datos
                //  - Petición HTTP
                //  - Query a base de datos
                if (i === loopLimit) console.log("He llegado al final!");
            }
        });
        console.log('El bucle ha finalizado!');
        console.log('No realmente ...');
        console.log('El proceso aun sige corriendo');
        console.log('lo que ocurre es que la ejecucion continua con las lineas posteriores');
        console.log('Y otro hilo de proceso esta ejecutando el ciclo for, y otro diferente ejecuta esta linea ...');
    }
}