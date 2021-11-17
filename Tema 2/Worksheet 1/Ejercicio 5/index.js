/*Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y
el método setTimeout() crea un reloj que se actualice cada segundo.
*/
function recargar(){
    location.reload(); //Sirve para recargar la página
}

function reloj() {
    fecha = new Date();
    h = fecha.getHours();
    m = fecha.getMinutes();
    s = fecha.getSeconds();

    document.write(h + ":" + m + ":" + s) + "<br>";
    setTimeout(recargar, 1000); //Llamo a la función de recarga

    
}

// Llamo fuera para iniciar el programa
reloj();
