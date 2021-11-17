/**Crea una función que tomando una cadena de texto como entrada coloque todas
sus consonantes al principio y todas sus vocales al final de la misma, eliminando
los blancos.
 */

function ordenar(cadena) {
    cadena = cadena.split("");
    lista_vocales = [];
    lista_consonantes = [];

    for (i = 0; i <= cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {

            lista_vocales.push(cadena[i]);
        }
        else {
            lista_consonantes.push(cadena[i]);
        }
    }
    return lista_consonantes.concat(lista_vocales);

}

document.write(ordenar("Hola"));