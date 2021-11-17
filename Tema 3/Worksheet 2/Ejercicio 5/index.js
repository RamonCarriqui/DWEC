/**Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array */

function paresImpares(){
    lista = [];
    pares = [];
    impares = [];
    for(i=0; i<= 100;i++){
        numero = Math.floor(Math.random() * (1000 - 1)) + 1;  // Saco número aleatorio
        if(numero % 2 == 0){
           pares.push(numero);
        }   // Si es par va a una lista y si no a otra
        else{
            impares.push(numero);
        }
    }
    lista.push(pares); // Introduzco lista par en lista
    lista.push(impares); // Introduzco lista impar en lista

    return lista;
}

document.write(paresImpares());