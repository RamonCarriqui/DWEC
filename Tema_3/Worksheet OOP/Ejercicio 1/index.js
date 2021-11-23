class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];

    }

    eat(comida) { // Pasamos comida a la persona

        (this.stomach.length <= 10) ? this.stomach.push(comida) : "Estás lleno";
        // if (this.stomach.length >= 10) {
        //     return "Estás lleno";
        // } else {
        //     this.stomach.push(comida);
        // }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return "The name is" + this.name + " and the age is " + this.age;
    }
}

// COMPROBACIONES
let p1 = new Person("Maria", 50);
p1.eat("arroz");
console.log(p1);
p1.poop();
console.log(p1);
