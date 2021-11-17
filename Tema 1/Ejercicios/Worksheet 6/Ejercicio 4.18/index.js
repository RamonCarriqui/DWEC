columnas = prompt("Introduce un número de columnas");
filas = prompt("Introduce el número de filas");
altura = prompt("Introduce la altura en pixeles");
anchura = prompt("Introduce la anchura en pixeles");

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');


for (let i = 1; i <= filas; i++) {
    document.write('<tr bgcolor = "white" width="' + anchura + '">&nbsp;</td>');
    for (let j = 1; j<= columnas; j++) {
        document.write('<td width="' + anchura + '">&nbsp;</td>');
    }
}

document.write("</tr>");
document.write("</table>");