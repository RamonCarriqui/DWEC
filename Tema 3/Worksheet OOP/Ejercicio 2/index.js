class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons) {
        this.tank += gallons;
    }

    drive(distance) {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;

        // (this.tank <= 0) ? "I ran out of fuel at " : FALTA POR ACABAAAAAAAAAAAAAAAAAAAAR
    }

}

let coche1 = new Car("León", 8);
coche1.fill(30);
console.log(coche1);