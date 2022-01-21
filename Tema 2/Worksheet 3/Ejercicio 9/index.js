/**Escribir un procedimiento que lea una palabra y la escriba (formateada dentro de
una tabla) */

palabra = "HOLA"
palabra = palabra.split('');
document.write("<table>")
for(let i = 0; i<palabra.length;i++){
    
    document.write("<tr><td>"+palabra[i]+"</td></tr>")

}
document.write("</table>")