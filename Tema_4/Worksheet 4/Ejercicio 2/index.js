window.addEventListener("load", main);
var letra=11;

function main() {
    document.getElementById("aumentar").addEventListener("click", aumentar);
    document.getElementById("defecto").addEventListener("click", defecto);
    document.getElementById("justificar").addEventListener("click", justificar);
    document.getElementById("izq").addEventListener("click", izquierda);
    
}

function aumentar(){
    letra++;
    document.body.style.fontSize = letra+"px";
}

function defecto(){
    letra = 11;
    document.body.style.fontSize = letra+"px";
}

function justificar(){
    document.body.style.textAlign = "justify";
}

function izquierda(){
    document.body.style.textAlign = "left";
}