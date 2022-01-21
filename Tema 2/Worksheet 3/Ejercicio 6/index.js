/**Implementa una función que tomando dos cadenas como entrada nos diga si la
segunda es una subcadena de la primera y cuál es la primera posición a partir de
la que esto ocurre.*/

cadena = prompt('Introduce una cadena')
cadena2 = prompt('Introduce una segunda cadena')
document.write(`Las cadenas introducidas son: "${cadena}" y "${cadena2}" <br> `)

function subcadena(cadena,cadena2){
    if (cadena.includes(cadena2) == true){
        posicion = cadena.firstIndexOf(cadena2)
        document.write("La segunda cadena aparece en la primera y empieza en la posición " + posicion)
    }
}

document.write(subcadena(cadena,cadena2));