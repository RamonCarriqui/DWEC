const parrafo = document.querySelector('p');
const div = document.querySelector('div');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const boton = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random()*(number+1));
}

cambiarColor = function() {
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndCol;
}

parrafo.onfocus = cambiarColor
div.onclick = cambiarColor
img.onclick = cambiarColor
h2.onclick = cambiarColor
boton.addEventListener("click", cambiarColor);