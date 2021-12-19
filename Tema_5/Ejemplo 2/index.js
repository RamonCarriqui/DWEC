window.onload = () => {
    document.getElementById("crear").addEventListener("click", crearCookie);
    document.getElementById("borrar").addEventListener("click", borrarCookie);
    document.getElementById("mostrar").addEventListener("click", mostrarCookie);

    document.getElementById("crearImagen").addEventListener("click", crearImagen);
    document.getElementById("crearLI").addEventListener("click", crearLI);

    document.getElementById("lista").children[0].addEventListener("click", borraEntrada);
    document.getElementById("lista").children[1].addEventListener("click", borraEntrada);
}

function borraEntrada(evento){ // Como varias llaman a la misma función es necesario poner el target para saber quién la llamó
    document.getElementById("lista").removeChild(evento.target);
}

function crearImagen() {
    let imagenNueva = document.createElement("img");
    imagenNueva.src = "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg";
    imagenNueva.style.border = '1px solid black';
    imagenNueva.addEventListener("click", borraIMG);
    document.body.appendChild(imagenNueva);
}

function borraIMG(evento) {
    document.body.removeChild(evento.target);  // REMOVE FUNCIONA CON EL PADRE DE LO QUE SE QUIERE BORRAR
    // Borro aquel en el que hago click
    console.log("borra img");
}

function crearLI() { // Crear elementos y añadir nodos
    let nuevaEntrada = document.createElement("li");
    let texto = document.getElementById("textoLI").value;
    nuevaEntrada.addEventListener("click" , borraEntrada);
    nuevaEntrada.innerHTML = texto;
    document.getElementById("textoLI").value=""; // Borra el texto después de aplicarlo
    document.getElementById("lista").appendChild(nuevaEntrada);

    document.getElementById
}

function crearCookie() {
    document.cookie = "usuario=jose";
}

function borrarCookie() {
    document.cookie = "usuario=jose; max-age=0;";
}

function mostrarCookie() {
    console.log(document.cookie);
}