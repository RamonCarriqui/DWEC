/*Mostrar imágenes del documento*/
document.write("Número de imágenes: " + document.images.length + "<br>");

/**Mostrar id de la primera imagen */
var x = document.images.item("0").id;
document.write("ID de la imagen 1: " + x +"<br>");

/**Muestra el número de enlaces del documento */
document.write(document.links.length);

/**Cambia el título del documento */
document.title = "Este título es nuevo";