class Contacto {
    constructor(nombre, direccion, telefono, email) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}

class Agenda {
    constructor() {
        this.agenda = [];
    }

    introducirContacto(objetoContacto) {
        this.agenda.push(objetoContacto);
    }

    mostrarContacto(nombre) {
        for (let contacto of this.agenda) {
            if (contacto.nombre == nombre) {
                return contacto;
            }
        }
    }

    mostrarOrdenados() {
        this.agenda.sort((a, b) => a.nombre.localeCompare(b.nombre));
        return this.agenda;
    }

    borrarContacto(nombre) {
        this.agenda.forEach(element => {
            if (element == nombre) {
                this.agenda.splice(element, 1) // Borro solo el que me encuentro
            }
        });
    }
}

// let contacto1 = new Contacto("Antonio", "Calle Marimorena", 12345678, "antonio@gmail.com");
// let contacto2 = new Contacto("Pepe", "Calle Malavista", 87654321, "pepe@gmail.com");
// let contacto3 = new Contacto("Manuel", "Calle Falsa", 478574632, "manu@gmail.com");

// let agenda1 = new Agenda();

// agenda1.introducirContacto(contacto1);
// agenda1.introducirContacto(contacto2);
// agenda1.introducirContacto(contacto3);

// console.log(agenda1.mostrarContacto(contacto1.nombre));
// console.log(agenda1.mostrarContacto(contacto2.nombre));
// console.log(agenda1.mostrarContacto(contacto3.nombre));


// console.log(agenda1.mostrarOrdenados());

// agenda1.borrarContacto(contacto2);

// console.log(agenda1.mostrarOrdenados());


// Añadimos la parte de la interfaz
let contacto1 = new Contacto("Antonio", "Calle Marimorena", 12345678, "antonio@gmail.com");
let contacto2 = new Contacto("Pepe", "Calle Malavista", 87654321, "pepe@gmail.com");
let contacto3 = new Contacto("Manuel", "Calle Falsa", 478574632, "manu@gmail.com");

let agenda1 = new Agenda();

agenda1.introducirContacto(contacto1);
agenda1.introducirContacto(contacto2);
agenda1.introducirContacto(contacto3);

window.onload = () => {
    boton = document.getElementById("mostrar");
    boton.addEventListener("click", mostrar);

    let contacto1 = new Contacto("Antonio", "Calle Marimorena", 12345678, "antonio@gmail.com");
    let contacto2 = new Contacto("Pepe", "Calle Malavista", 87654321, "pepe@gmail.com");
    let contacto3 = new Contacto("Manuel", "Calle Falsa", 478574632, "manu@gmail.com");

    let agenda1 = new Agenda();

    agenda1.introducirContacto(contacto1);
    agenda1.introducirContacto(contacto2);
    agenda1.introducirContacto(contacto3);
}

function mostrar() {

    for (let contacto of agenda1.agenda) {
        div = document.createElement("div");
        lista = document.createElement("ul");

        document.body.appendChild(div);
        div.appendChild(lista);

        for (let propiedad in contacto) {
            li = document.createElement("li");
            li.innerHTML = contacto[propiedad];
            lista.appendChild(li);
        }

    }

}