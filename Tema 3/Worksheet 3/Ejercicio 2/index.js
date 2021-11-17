/**Over an array with names, find all entries whose firstname starts with 'J', create
 *  projection combined of only the inicialestials of the name and then sort alphabetically */

nombres = ["Ramon","Alicia","Belen","Maria","Miguel", "Juan"];

cadena_aux = [];
nombres.forEach(nombre => {
    if (nombre[0] == 'J'){
        cadena_aux.push(nombre);
    }
});
console.log(cadena_aux);



iniciales = [];

nombres.forEach(nombre => {
    iniciales.push(nombre[0]);
});
console.log(iniciales);