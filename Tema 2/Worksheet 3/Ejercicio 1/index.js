/*Crea las siguientes funciones y llámalas desde una página XHTML para mostrar
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra más larga en ella contenida.
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en mayúscula la primera letra y el resto en ó ú
minúscula.*/


cadena = "esto es una prueba para realizar el ejercicio uno"
// A
function invierteCadena(cad_arg) {
    var invertida = "";
    for(let i = cad_arg.length - 1; i >= 0; i--)
        invertida +=cad_arg[i];
    
    return invertida;

}



// B
function inviertePalabras(cad_arg) {
    cadena = cad_arg.split(" "); // Convertimos la cadena en array
    cadena = cadena.reverse(); // Le damos la vuelta
    cadena = cadena.join(" "); // Volvemos a unir el array por espacios
    return cadena;

}


//C
function encuentraPalabraMasLarga(cad_arg) {
    array = cad_arg.split(" "); // Quitamos los espacios
    mas_larga = array[0];
    for (i of array){
        if (array[i].length > mas_larga.length)
            mas_larga = array[i];
    
    return mas_larga;
    }

}

document.write(invierteCadena(cadena) + "<br>");
document.write(inviertePalabras(cadena)+ "<br>");
document.write(encuentraPalabraMasLarga(cadena));