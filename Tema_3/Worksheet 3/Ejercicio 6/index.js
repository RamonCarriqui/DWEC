/**One classic method for composing secret messages is called a square code.
 * The spaces are removed from the english text and the characters are written into 
 * a square (or rectangle). For example, the sentence "If man was meant to stay on the 
 * ground god would have given us roots" is 54 characters long, so it is written 
 * into a rectangle with 7 rows and 8 columns. */


cadena = 'If man was meant to stay on the ground god would have given us roots';

array = cadena.split(''); // Pasamos a Array

for (let i = 0; i < array.length; i++) {
    if (array[i] === ' ') {
        array.splice(i, 1); // Elimina los espacios
    };
};


array.forEach(caracter => {
    while (array.length > 0) {
        let array2 = array.splice(0, 8);// Crea conjunto de 8 caracteres cortando los caracteres del array
        for (i of array2) {
            document.write(i); // Mostrar cada valor del array creado en el splice
        };
        document.write('<br>'); // Añadir el salto de línea despúes del último caracter
    };
})