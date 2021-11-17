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

// Habilitams el control táctil

var mc = new Hammer(myElement);
mc.on("panleft",click_atras);
mc.on("panright",click_delante);

// Esto sirve para modificar la orientación de la imagen
window.addEventListener('deviceorientation', tratarOrientacion);

function tratarOrientacion(e) {
    document.getElementById("miimagen").style.transform = "rotate(" + e.alpha + "deg)";
    // document.getElementById("miimagen").style.transform = "skewY(" + e.beta + "deg)";
 
}