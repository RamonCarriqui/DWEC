/**Desarrolla una función que tomando como entrada una cadena de texto nos
devuelva si es o no un palíndromo. */

function palindromo(cadena){
    let array = cadena.split(""); // Convierto en array
    let reverse = array.reverse(); // Das la vuelta al array

    return cadena == reverse.join("") ? "Si es" : "No es"; // Comparo cadena original con la invertida
}

console.log(palindromo("acurruca"));