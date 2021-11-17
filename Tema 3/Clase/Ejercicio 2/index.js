/**Crear array con 10 valores con campos y ordenar creciente y decreciente */

coches = [

    { marca: 'BMW', modelo: "serie1", combustible: "gasolina" },
    { marca: 'BMW', modelo: "serie1", combustible: "diesel" },
    { marca: 'Audi', modelo: "a3", combustible: "gasolina" },
    { marca: 'Audi', modelo: "a1", combustible: "gasolina" },
    { marca: 'Seat', modelo: "leon", combustible: "diesel" },
    { marca: 'Opel', modelo: "astra", combustible: "gasolina" }
];

// Decreciente
comparacion = coches.sort((a, b) => {
    if (a.modelo < b.modelo) {
        return 1;
    } else if (a.modelo > b.modelo) {
        return -1;
    } else if (a.modelo === b.modelo) {
        return a.combustible - b.combustible;
    }
}); 

console.log(comparacion);
/* 
// Creciente
comparacion = coches.sort((b, a) => {
    if (a.modelo < b.modelo) {
        return 1;
    } else if (a.modelo > b.modelo) {
        return -1;
    } else if (a.modelo === b.modelo) {
        return b.combustible - a.combustible;
    }
});

console.log(comparacion); */