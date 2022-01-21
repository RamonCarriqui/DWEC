window.onload = () =>{
    const boton = document.getElementById("submit");
    boton.addEventListener("click", cambiarMapa);

}

function cambiarMapa(){
     // Cambia el value del boton a cambiar a Calidad del aire y además muestra el mapa del tiempo
     if (this.value == "Mapa del tiempo"){
        this.value = "Mapa de calidad del aire";
        

    }else{
        this.value = "Mapa del tiempo";

    }
}
