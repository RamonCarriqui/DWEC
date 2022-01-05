// e8b6c63ea00048a2a530f30d8e6a5f3d


window.onload = () =>{
    const nombre = document.getElementById("nombre");
    const boton = document.getElementById("submit");

    boton.addEventListener("click", buscar(nombre));
}

function buscar(nombre){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.fishwatch.gov/api/species", false);
    xhttp.send();
    document.getElementById("").innerHTML = xhttp.responseText;
  }
