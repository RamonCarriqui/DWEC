/*Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada por mayúsculas, o por minúsculas
por una mezcla de ambas.
*/

function informacion(cadena) {
    cad_aux = cadena;
    if (cadena == cad_aux.toLowerCase()) {
        return 'Está todo en minúsculas';
    }
    else if (cadena == cad_aux.toUpperCase()) {
        return 'Está todo en mayúsculas';
    }
    else {
        return 'Es una combinación de mayúsculas y minúsculas';
    }
}

cadena = prompt('Introduzca un texto');
document.write(informacion(cadena));