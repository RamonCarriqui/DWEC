/**Desarrolla una función que elimine los caracteres repetidos de una cadena de
texto, incluidos los blancos.*/

function quitar_repetidos(cadena) {
    cadena = cadena.split("");
    cadena_aux = "";

    for (let i = 0; i <= cadena.length; i++) {
        for (let j = i+1; j <= cadena.length; j++) {
            if (cadena[i] === cadena[j]) {
                
                cadena.splice(i,1);
                cadena.pop(j); // Eliminas el valor ya añadido

            }
            

        }
    }
    return cadena.join(""); // Para eliminar las comas
}

document.write(quitar_repetidos("FFDJJ"));