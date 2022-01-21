/**EJERCICIO: Haz una función que ordene las notas de un array pasado como parámetro. 
 * Si le pasamos [4,8,3,10,5] debe devolver [3,4,5,8,10]. Pruébalo en la consola */

let notas = [4, 8, 3, 10, 5];

function comparar(valor1, valor2) { // Forma del ejemplo
    if (valor1 < valor2) {
        return -1;
    }
    else if (valor1 > valor2) {
        return 1;

    } else {
        return 0;
    }

}


function comparar(valor1, valor2) { // Otra forma de hacerlo
    return valor1 - valor2;

}

notas.sort((a, b) => a - b); // Forma PRO


notas.sort(comparar);

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

items.sort((a, b) => a.value - b.value);