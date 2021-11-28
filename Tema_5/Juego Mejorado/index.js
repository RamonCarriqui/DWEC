import * as Partida from "./modules/game.js";

window.onload = () => {
    const imagen1 = document.getElementById("imagen1");
    const imagen2 = document.getElementById("imagen2");
    imagen1.addEventListener("click", empezarPartida);
    imagen2.addEventListener("click", empezarPartida);

    const texto1 = document.getElementById("texto1");
    const texto2 = document.getElementById("texto2");

}


function empezarPartida() {
    // Creamos los datos para pasar a la clase jugador
    let datos_jugador1 = {
        nombre: "Ramón",
        rondas_ganadas: 0,
        rondas_perdidas: 0
    };

    let datos_jugador2 = {
        nombre: "Pepe",
        rondas_ganadas: 0,
        rondas_perdidas: 0
    };

    // Llamo a la clase para crear los jugadores
    let jugador1 = new Partida.Jugador(datos_jugador1);
    jugador2 = new Partida.Jugador(datos_jugador2);
    
    // Creo las manos que sacarán los jugadores
    let jugador1.mano();
    let jugador2.mano();

    // Creo la partida
    let juego1 = new Partida.Juego(jugador1, jugador2);

    // LLamo a la tirada del jugador que se muestra a través del texto 1
    var texto1.innerHTML = jugador1.tirada + jugador2.tirada;

    // Llamo a la partida y realiza la comparación
    let juego1.partida();


    // Muestro los resultados a través del texto 2
    var texto2.innerHTML = jugador1.resultados() + jugador2.resultados();

}
