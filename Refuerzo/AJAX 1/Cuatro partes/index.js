window.onload = () => {
    var cuadro1 = document.getElementById("uno");
    var cuadro2 = document.getElementById("dos");
    var cuadro3 = document.getElementById("tres");
    var cuadro4 = document.getElementById("cuatro");

    cuadro1.addEventListener("mouseover", ajax);
    cuadro2.addEventListener("mouseover", ajax);
    cuadro3.addEventListener("mouseover", ajax);
    cuadro4.addEventListener("mouseover", ajax);


}

function ajax(e) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            e.target.innerHTML = this.responseText;
        }
        
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
   
}