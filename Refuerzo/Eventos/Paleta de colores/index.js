window.onload = () => {

    filas = 5;
    columnas = 5;
    crearTabla(filas, columnas);

}

function crearTabla(filas, columnas) {
    tabla = document.getElementById("tabla");
    for (let i = 0; i < filas; i++) {
        tr = document.createElement("tr");
        tabla.appendChild(tr);
        for (let j = 0; j < columnas; j++) {
            td = document.createElement("td");
            let color = colorAleatorio();
            td.style.backgroundColor = color;
            td.style.color = "white";
            td.innerHTML = color;
            td.addEventListener("mouseover", function () {
                document.body.style.backgroundColor = color;
            });
            tr.appendChild(td);
        }

    }
}

function colorAleatorio() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16); // Color aleatorio
}

