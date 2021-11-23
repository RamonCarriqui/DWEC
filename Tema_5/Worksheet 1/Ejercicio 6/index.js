numero_imagen = 1;
const boton1 = document.getElementById("atras");
const boton2 = document.getElementById("siguiente"); // Guardo en variables los elementos

const imagen1 = document.getElementById("der");
const imagen2 = document.getElementById("izq");

numero_imagen = 1;
function click_delante() {

    if (numero_imagen == 3) {
        numero_imagen = 1;
        document.getElementById("numeracion").innerHTML = numero_imagen + "/3";
        document.getElementById("miimagen").src = numero_imagen + ".jpeg";
    }
    else {
        numero_imagen += 1;
        document.getElementById("numeracion").innerHTML = numero_imagen + "/3";
        document.getElementById("miimagen").src = numero_imagen + ".jpeg";
    }
}


function click_atras() {

    if (numero_imagen == 1) {
        numero_imagen = 3;
        document.getElementById("numeracion").innerHTML = numero_imagen + "/3";
        document.getElementById("miimagen").src = numero_imagen + ".jpeg";

    } else {
        numero_imagen -= 1;
        document.getElementById("numeracion").innerHTML = numero_imagen + "/3";
        document.getElementById("miimagen").src = numero_imagen + ".jpeg";

    }
}

boton1.addEventListener("click", click_atras);
boton2.addEventListener("click", click_delante);

imagen1.addEventListener("click", click_delante);
imagen2.addEventListener("click", click_atras);
