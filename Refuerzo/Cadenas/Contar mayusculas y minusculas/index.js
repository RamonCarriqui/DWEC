cadena = "Hola que tal Manuel";

function contarLetras() {
    mayusculas = 0;
    minusculas = 0;
    for (let letra of cadena) {
        if (letra == letra.toUpperCase() && letra != " ") { // Los espacios se detectan como mayúsculas. No se deben contar
            mayusculas++;
        } else {
            minusculas++;
        }
    }

    return {
        "Mayúsculas": mayusculas,
        "Minúsculas": minusculas
    };

}

console.log(contarLetras(cadena));