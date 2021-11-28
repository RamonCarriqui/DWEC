window.onload = () => {
    svg = document.getElementById("panel"); // Guardamos el campo de dibujo
    // Creamos la bola
    bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bola.setAttributeNS(null, "fill", "aqua");
    posicionX = 60;
    posicionY = 60;
    bola.setAttributeNS(null, "cx", posicionX);
    bola.setAttributeNS(null, "cy", posicionY);
    bola.setAttributeNS(null, "r", 10);
    // Añadimos el círculo creado al svg para que se vea en pantalla
    svg.appendChild(bola);

    // Añadimos movimiento a la bola con setInterval
    setInterval(function () {
        if ((bola.cx >= 0) && (bola.cx < 500)) { // Añadimos el rebote horizontal
            // Posicion X
            posicionX++;
            bola.setAttributeNS(null, "cx", posicionX);
        } else {
            bola.cx *= -1;
            posicionX--;
            bola.setAttributeNS(null, "cx", posicionX);
        }

        if ((bola.cy >= 0) && (bola.cy < 500)) { // Añadimos el rebote vertical
            // Posicion Y
            posicionY++;
            bola.setAttributeNS(null, "cy", posicionY);
        } else {
            bola.cy *= -1;
            posicionY--;
            bola.setAttributeNS(null, "cy", posicionY);
        }



    }, 10);


}
