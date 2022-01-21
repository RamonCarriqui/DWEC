cadena = "Hola que tal Manuel";
caracter = "a";

function repetidos(cadena, caracter) {
    repetidos = 0;
    for (let letra of cadena) {
        if (letra == caracter) {
            repetidos++;
        }

    }

    return repetidos;

}

console.log(repetidos(cadena, caracter));