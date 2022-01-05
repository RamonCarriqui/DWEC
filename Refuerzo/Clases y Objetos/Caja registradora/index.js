class Empleado {
    constructor(nombre, descuento) {
        this.nombre = nombre;
        this.descuento = descuento;
    }
}

class Caja {
    constructor() {
        this.empleado = null;
        this.compra = [];


    }

    scan(producto) {
        this.compra.push(producto);
    }

    identificarEmpleado(empleado) {
        this.empleado = empleado;
    }

    cuenta() {
        let suma = 0;
        for (let producto of this.compra) {
            suma += producto.precio;
        }
        let descuento = suma * this.empleado.descuento / 100;
        return suma - descuento;
    }
}

var producto1 = {
    "nombre": "manzanas",
    "precio": 2
}

var producto2 = {
    "nombre": "peras",
    "precio": 3
}

let empleado1 = new Empleado("Manuel", 5);

let caja1 = new Caja();
caja1.scan(producto1);
caja1.scan(producto2);

caja1.identificarEmpleado(empleado1);
console.log(caja1.cuenta());