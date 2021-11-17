/*Crea una web que genere una tabla con dos columnas. En la primera un
numero ascendente y en la otra el valor de su seno*/

lista = [1, 2, 3, 4, 5, 6, 7, 8, 10];

document.write("<table border=1px>");


for (i of lista) {
    document.write("<tr>")
    document.write("<td>" + i + "</td>");
    document.write("<td>" + Math.sin(i) + "</td>");
    document.write("</tr>")
}

document.write("</table>");