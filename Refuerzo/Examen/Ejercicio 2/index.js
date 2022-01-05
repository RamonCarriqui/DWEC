class Vino {
    constructor(nombre, year, cosecha, tipo) {
        this.nombre = nombre;
        this.year = year;
        this.cosecha = cosecha;
        this.tipo = tipo;

    }
}

class Bodega {
    constructor(nombre) {
        this.nombre = nombre;
        this.bodega = [];
    }

    anadirVino(objeto) {
        this.bodega.push(objeto);
    }

    devuelveListadoVinos(parametro) {

        if (parametro) {
            return {
                'n_vinos': this.bodega.length,
                'vinos': this.bodega.sort((a, b) => (a.nombre.localeCompare(b.nombre))),
            }
        } else {
            return {
                'n_vinos': this.bodega.length,
                'vinos': this.bodega
            }
        }

    }

    vinosPorTipo(tipo) {
        let lista = []
        for (let vino of this.bodega) {
            if (tipo == vino.tipo) {
                lista.push(vino);
            }
        }
        return {
            "n_vinos": lista.length,
            "vinos": lista
        }
    }


}

function ejercicio1(objeto) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = 'Vinos';
    document.body.appendChild(div);
    div.appendChild(h1);
    for (let vino of objeto.vinos) {
        var div_peque = document.createElement("div");
        let lista = document.createElement("ul");
        div.appendChild(div_peque);
        div_peque.appendChild(lista);
        for (let valor in vino) { // Cada valor sería una propiedad del vino
            let li = document.createElement("li");
            li.innerHTML = vino[valor];
            lista.appendChild(li);
        }
    }
}

window.onload = () => {
    let vino1 = new Vino("Rueda", "1984", "Rosado", "Gran Reserva");
    let vino2 = new Vino("Verdejo", "2016", "Blanco", "Reserva");

    let bodega1 = new Bodega("Manolo");

    bodega1.anadirVino(vino1);
    bodega1.anadirVino(vino2);

    ejercicio1(bodega1.devuelveListadoVinos(true));
}