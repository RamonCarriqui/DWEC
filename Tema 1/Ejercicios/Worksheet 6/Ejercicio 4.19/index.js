dimensiones = parseInt(prompt("Elige el tamaño en pixeles"));
document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');


for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) { // Si el resto es cero se crea una nueva fila negra
        document.write('<tr bgcolor = "black" height="' + dimensiones + '">');
        for (let j = 0; j < 8; j++) { // En cada fila se crean 8 celdas
            if (j % 2 != 0) { // Dentro de cada nueva fila, cada celda tendrá un color dependiendo del resto
                document.write('<td width="' + dimensiones + '" bgcolor = "white">&nbsp;</td>');
            }
            else {
                document.write('<td width="' + dimensiones + '" bgcolor = "black">&nbsp;</td>');
            }
        }
    }
    else { // Si el resto es distinto a cero la fila en un comienzo será blanca
        document.write('<tr bgcolor = "white" height="' + dimensiones + '">');
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) { // Cada nueva celda en la fila blanca podrá ser blanca o negra
                document.write('<td width="' + dimensiones + '" bgcolor = "white">&nbsp;</td>');
            }
            else {
                document.write('<td width="' + dimensiones + '" bgcolor = "black">&nbsp;</td>');
            }
        }
    }

}


document.write("</tr>");
document.write("</table>");