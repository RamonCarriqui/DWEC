function crearLI() {
    var nodo = document.createElement("LI"); // Creamos el LI
    var textoNodo = document.createTextNode("Nueva entrada"); // Creamos un texto
    nodo.appendChild(textoNodo); // Añadimos el texto al LI
    document.getElementById("lista").appendChild(nodo); // Añadimos el LI a la lista
}