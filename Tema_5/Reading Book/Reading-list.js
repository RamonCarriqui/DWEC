class BookList {
    constructor(read, notReadYet, next, current, last) {
        this.readBooks = read;
        this.notReadYet = notReadYet;
        this.next = next;
        this.current = current;
        this.last = last;
        this.all = [];
    }

    add(book) {
        this.all.push(book);
    }

    finishCurrentBook() {
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if (this.notReadYet != 0) {
            while (this.all[i].read == true || this.all[i] == this.current)
                i++;

            this.next = this.all[i];
        }
        else
            return "no hay mas libros para leer";
    }
}

class Book {
    constructor(title, genre, author, read, readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

window.onload = () => {


    var milista = new BookList();
    if (localStorage.milista) { // Si existe un localStorage, muestro los datos
        for (libro of JSON.parse(localStorage.milista).all) {
            let linueva = document.createElement("li");
            linueva.innerHTML = libro.title + ' ' + libro.author + ' ' + libro.genre + ' ' + libro.read + ' ' + libro.readDate;
            document.getElementById("lista").appendChild(linueva);
            milista.add(libro);
        }

    }
    document.getElementById("enviarymostrar").addEventListener("click", (e) => {
        e.preventDefault()
        let titulo = document.getElementById("titulo").value;
        let genero = document.getElementById("genero").value;
        let autor = document.getElementById("autor").value;
        let leido = document.getElementById("Leido").value;
        let fecha = document.getElementById("fecha").value;
        var libro = new Book(titulo, genero, autor, leido, fecha);
        milista.add(libro);

        // A??ado al localStorage
        localStorage.setItem('milista', JSON.stringify(milibro));

        let linueva = document.createElement("li");
        linueva.innerHTML = libro.title + ' ' + libro.author + ' ' + libro.genre + ' ' + libro.read + ' ' + libro.readDate;

        document.getElementById("lista").appendChild(linueva);

    });



}


function interfaz() {
    document.body.style.backgroundColor = "#FF8065";
    document.getElementById("contenido").style.textAlign = "center";
    document.getElementById("imagen").style.width = "100px";

    document.getElementById("formulario").style.backgroundColor = "#0CFFDA";
    document.getElementById("formulario").style.width = "500px";
    document.getElementById("formulario").style.margin = "auto";

    document.getElementById("div").style.backgroundColor = "#00D376";
    document.getElementById("div").style.margin = "auto";
    document.getElementById("div").style.width = "500px";
    document.getElementById("div").style.borderRadius = "30px";
    document.getElementById("div").style.border = "1px solid black";
}

window.addEventListener("load", interfaz);

// Creo un JSON de listalibros

var libros = {
    "libros": [
        {
            "titulo": "quijote",
            "genero": "caballeresco",
            "autor": "cervantes",
            "leido": false,
            "fecha": null
        },
        // se separan los valores como en un string con ","
        {
            "titulo": "quijote",
            "genero": "caballeresco",
            "autor": "cervantes",
            "leido": false,
            "fecha": null
        }
    ]
}