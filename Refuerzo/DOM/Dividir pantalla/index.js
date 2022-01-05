window.onload = () =>{
    cuadro1 = document.getElementById("uno");
    cuadro2 = document.getElementById("dos");
    cuadro3 = document.getElementById("tres");
    cuadro4 = document.getElementById("cuatro");

    cuadro1.addEventListener("click", mostrarTexto);
    cuadro2.addEventListener("click", mostrarTexto);
    cuadro3.addEventListener("click", mostrarTexto);
    cuadro4.addEventListener("click", mostrarTexto);


}

function mostrarTexto(){
    this.innerHTML= "<p>ESTE TEXTO SE PUEDE VER AHORA</p>";
}