window.onload = () => {
    caja = document.getElementById("caja");
    // caja.addEventListener("mouseover", () =>{
    //     alert("JELOU");
    // });
    caja2 = document.getElementById("caja2");
    caja3 = document.getElementById("caja3");

    caja.addEventListener("keyup", function(){
        valor = caja.value;
        caja2.value = valor * 2;
        caja3.value = valor ** 2
    
    })

}