class Lambdasian {
    constructor(parametros) {
        this.name = parametros[0];
        this.age = parametros[1];
        this.location = parametros[2];
    }

    speak() {
        return "Hello, my name is " + this.name + ", I am from " + this.location;
    }
}

let l1 = new Lambdasian(["Ramón", 23, "Jaén"]);
console.log(l1.speak());

class Instructor extends Lambdasian {
    constructor(parametros, valores) {
        super(parametros);
        this.specialty = valores[0];
        this.favLanguage = valores[1];
        this.cathPhrase = valores[2];
    }

    demo(asignatura) {
        return "Today we are learning about " + asignatura;
    }

    grade(estudiante, asignatura) { // Estudiante es un objeto de Lambdasian
        return `${estudiante.name} receives a perfect score on ${asignatura}`;
    }
}

let I1 = new Instructor(["Javier", 20, "Granada"], ["TIC", "JavaScript", "Why are you late?"]);
console.log(I1);
console.log(I1.speak());
console.log(I1.demo("Maths"));
console.log(I1.grade(l1, "Lengua"));

class Student extends Lambdasian {
    contructor(datos) {
        this.previousBackground = datos[0];
        this.className = datos[1];
        this.favSubjects = datos[2];
        this.grade = grade;
    }

    listSubjects(...array_subjects) { // Indicamos con 3 puntos para que coja todos los valores del array

        return `Loving ${array_subjects}`;
    }

    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
}

let student1 = new Student(["Miguel", 20, "Zaragoza"], ["Nada", "2ºDAW", "TIC", 7]);
console.log(student1.listSubjects("P.E", "Maths", "TIC"));
console.log(student1.PRAssignment(l1, "Ciencias Naturales"));

class ProjectManager extends Instructor {
    constructor(parametros, valores, informacion) {
        super(parametros, valores);
        this.gradClassName = informacion[0];
        this.favIntructor = informacion[1];
    }

    standUp(channel) {
        return `${this.name} announces to ${channel},@channel standy times`;
    }

    debugsCode(stu, subject) {
        return `${this.name} debugs ${stu.name}'s code on ${subject}`;
    }
}

let pm1 = new ProjectManager(["Manuel", 30, "Huelva"], ["Math", "PHP", "Hello students"], ["CS3", "Pepe"]); // Recibe valores de Instructor y parametros de lambdasian
console.log(pm1.standUp(7));
console.log(pm1.debugsCode(student1, "Lengua"));

