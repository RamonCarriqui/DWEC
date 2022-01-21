/*Crea una web para resolver ecuaciones de segundo grado. Deber pedir por
tanto los coeficientes y mostrar las soluciones posibles.*/


a = parseInt(prompt("Introduce el primer coeficiente"));
b = parseInt(prompt("Introduce el segundo coeficiente"));
c = parseInt(prompt("Introduce el tercer coeficiente"));

discriminante = b ** 2 - 4 * a * c;

if (discriminante < 0) {
    document.write("No tiene solución");

}
else {
    document.write("El primer resultado es " + (-b + Math.sqrt(discriminante) / 2 * a) + "<br>");
    document.write("El segundo resultado es " + (-b - Math.sqrt(discriminante) / 2 * a));
}