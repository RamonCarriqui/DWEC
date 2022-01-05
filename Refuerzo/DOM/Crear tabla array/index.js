window.onload = () => {
    arr = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21]];
    crearTabla(arr);
}

function crearTabla(array){
    var tabla = document.createElement('table');
    document.body.appendChild(tabla);
    tabla.setAttribute("border", "1");
    tabla.setAttribute("borderColor", "red");
    for (fila of array){
        var tr = document.createElement('tr');
        tabla.appendChild(tr);
        for(celda of fila){
            var td = document.createElement('td');
            td.innerHTML = celda;
            tr.appendChild(td);
        }
    }
}