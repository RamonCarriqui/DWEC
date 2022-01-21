window.onload = () =>{
    texto = document.getElementById("texto");
    texto.addEventListener("keyup", ajax);
}

function ajax(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            
        }
        
    };
    xhttp.open("POST", "localidades.txt", true);
    xhttp.send();
   
}