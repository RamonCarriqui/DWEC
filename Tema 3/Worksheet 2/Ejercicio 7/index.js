/**Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios. */

function elementosACero(lista) {

    lista.forEach((valor, posicion) => { lista[posicion] = 0; });
    // Hay que pasar el elemento a modificar y el indice que tiene
    return lista;

     // Otra forma más facil --> array.fill(0);
};

function sumarUno(lista) {
    lista.forEach((valor, posicion) => { lista[posicion] += 1; });
    return lista
};

function espacios(lista) {
    
    lista.forEach((valor, posicion) => { document.write(valor+ " "); });
}






lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write(elementosACero(lista) + "<br>");
document.write(sumarUno(lista) + "<br>");
espacios(lista);