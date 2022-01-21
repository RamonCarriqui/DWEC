function saltaAltert(e) {
    alert(e.target.tagName);
}

document.getElementById("formulario").onclick = saltaAltert;
document.getElementById("parrafo").onclick = saltaAltert;
document.getElementById("div").onclick = saltaAltert;