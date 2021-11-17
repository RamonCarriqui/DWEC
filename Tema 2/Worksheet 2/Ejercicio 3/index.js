/*Crea una web que e calcula la hipotenusa de un triangulo rectangulo
(pidiendo al usuario el tamaño de los dos catetos).*/

cateto1 = parseInt(prompt("Dime el tamaño del cateto 1"));
cateto2 = parseInt(prompt("Dime el tamaño del cateto 2"));

resultado = Math.hypot(cateto1, cateto2)
document.write("El tamaño de la hipotenusa es: " + resultado.toFixed(3)); //Redondedo a 3 decimales
