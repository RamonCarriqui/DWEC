// Ejercicio 6

function Ejercicio6(array) {
    array_aux = [];
    array.forEach(element => { // A medias, no da la suma pero si el mayor del par
        array_aux.push(element.sort(((a, b) => b - a)));
    });
    return array_aux;
}

array = [[1, 3], [4, 2], [2, 1]]
console.log(Ejercicio6(array));

// Ejercicio 7
function Ejercicio7(id_parrafo) {
    id_parrafo.style.fontSize = "14px";
    id_parrafo.style.color = "red";
    id_parrafo.style.backgroundColor = "yellow";
    id_parrafo.style.fontFamily = "Comic Sans MS";
}

const parrafo = document.getElementById("ejercicio7");
// window.addEventListener("load", Ejercicio7(parrafo)); // Esto se comenta porque se lo añado al ejercicio 8

// Ejercicio 8
function Ejercicio8(elementos) {
    var letras = '0123456789ABCDEF'.split(''); // Variable pasada a array, donde cada valor es un código válido para generar el código de color
    var color = '#';
    for (var i = 0; i < 6; i++) { // Por cada valor del código, se añade un valor aleatorio perteneciente a la variable letras en la variable color
        color += letras[Math.floor(Math.random() * 16)]; // Se modifica color, añadiendo con cada vuelta del bucle un dígito para obtener el color final
    }

    elementos.style.backgroundColor = color; // Aplico el resultado a los elementos. POR ALGÚN FALLO SOLO SE EJECUTA CON EL PRIMER DIV

}

function mensaje(divs) {
    alert("El color del div es " + divs.style.backgroundColor + "."); // SE QUEDA A MEDIAS, NO FUNCIONA
}

const divs = document.querySelector("div");
divs.addEventListener("click", mensaje(divs));
window.addEventListener("load", Ejercicio7(parrafo), Ejercicio8(divs));

/* 
Ejercicio 9

Los comandos introducidos para subir mediante Git el examen han sido :
echo "# examenParcial" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/RamonCarriqui/examenParcial.git
git push -u origin main
git add . 
git commit -m "añado aexamen"
git push origin main */