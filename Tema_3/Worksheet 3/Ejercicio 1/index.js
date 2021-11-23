/**Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
find largest number
find longest string
find even numbers
find odd numbers
find words that contain 'is'
assert all numbers are divisible by three
zip two arrays together
sort joined array from smallest to largest
remove the first word in the array
place a new word at the start of the array
replace some elements */

lista = [1, 2, 3, 34, 56];
// Número más largo
mayor = Math.max.apply(null, lista);
document.write("Número más largo: " + mayor + " <br>");


string = ["hola", "adios", "jeje"];
// String más largo
cadena = string.sort((a, b) => b.length - a.length)[0]; // Ordena de mayor a menro y solo muestro la primra cadena
document.write("String más largo es: " + cadena + "<br>");


// Encontrar los números pares
pares = []
lista.forEach(valor => {
    if (valor % 2 == 0) {
        pares.push(valor);
    }
});
document.write("Lista de pares: " + pares + "<br>");

// Encontrar los números impares

impares = []
lista.forEach(valor => {
    if (valor % 2 != 0) {
        impares.push(valor);
    }
});
document.write("Lista de impares: " + impares + "<br>");

// Encontrar palabras que contengan "is"
palabras = ["Paris","parchis","hola","adios","buenas","is"];

palabras_is = [];

palabras.forEach(palabra => {
    if (palabra.includes("is")) {
        palabras_is.push(palabra);
    }
});

document.write(" Las palabras que contienen IS son: "+palabras_is+"<br>");


// Numeros divisibles por 3
divisibles = []
lista.forEach(valor => {
    if (valor % 3 == 0) {
        divisibles.push(valor);
    };
});
document.write("Divisibles por 3: " + divisibles + "<br>");

// Unir 2 arrays
listas_unidas = lista.concat(string);
document.write("Dos cadenas unidas " + listas_unidas + "<br>");

// Ordenar array 
ordenada = listas_unidas.sort((a, b) => a - b);
document.write("Lista anterior ordenada " + ordenada + "<br>");

// Quitar primera palabra/valor del array
ordenada.shift();
document.write("Elimino el primer valor de la lista anterior: " + ordenada + "<br>");

// Poner un nuevo valor al comienzo del array
ordenada.unshift("NEW_VALOR");
document.write("Añado un valor nuevo en la lista anterior: " + ordenada + "<br>");

// Reemplazar algunos elementos
ordenada.splice(1, 1, 300);
document.write("Lista modificando el elemento 2: " + ordenada);

