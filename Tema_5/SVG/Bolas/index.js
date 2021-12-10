import { Bola, Interfaz, Aleatorio, InterfazRectangulo, Rectangulo } from "./bola_mimodulo.js"

window.onload = () => {

    let mibola = new Bola(Aleatorio(5, 9), Aleatorio(15, 40), Aleatorio(15, 40), Aleatorio(6,20), Aleatorio(6, 20));
    let interfaz = new Interfaz(mibola, document.getElementById("panel"), "red" );

    let mirectangulo1 = new Rectangulo(30, 150, (document.getElementById("panel").getBoundingClientRect().width)-30);
    let mirectangulo2 = new Rectangulo(30, 150, document.getElementById("panel"))

    let interfazcuadrada = new InterfazRectangulo(mirectangulo1, document.getElementById("panel"), "blue");
    let interfazcuadrada2 = new InterfazRectangulo(mirectangulo2, document.getElementById("panel"), "blue");
   
    var tam = document.getElementById("panel");
    setInterval(() => {
        mibola.moverse(tam.clientWidth, tam.clientHeight);
        interfaz.dibuja();
    }, 30);


    interfazcuadrada.dibuja();
    interfazcuadrada2.dibuja();

    
    // Mover las barras
    mirectangulo1.addEventListener("")


};