var num_adivinar = prompt("Introduce el número a adivinar");
num = prompt("Introduce un número");

while (num != num_adivinar) {
    if (num < num_adivinar) {
        alert("El número es mayor");
        num = prompt("Introduce un número");
    }
    else if (num > num_adivinar) {
        alert("El número es menor");
        num = prompt("Introduce un número");
    }


}
alert("Has acertado!!!");