/* Crea un script que pida al usuario dos nñumeros y una operación
(que puede ser el carácter +,-,* o /). El script debe devolver
el resultado de la operación seleccionada por el usuario*/

num1 = parseInt(prompt("Introduce un primer número"));
num2 = parseInt(prompt("Introduce un segundo número"));
operacion = prompt("Elige la operación con los signos que le corresponden");

switch (operacion){
    case "+":
        alert("La suma es "+ (num1 + num2));
        break;
    case "-":
        alert("La resta es "+ (num1 - num2));
        break;
    case "*":
        alert("La multiplicación es "+ (num1 * num2));
        break;
    case "/":
        alert("La división es "+ (num1 / num2));
}