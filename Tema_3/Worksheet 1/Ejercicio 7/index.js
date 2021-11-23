/*Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.*/

function factorial(num) {
	if (num==0) {
		return 1
	} else{
		return num*factorial(num-1)
	};
};
document.write('<h1>FACTORIALES DE 1 A 10</h1><table border=1>') // Abro tabla
for (var i = 1; i < 11; i++) {
	document.write(`<tr bgcolor="white"><td>${i}</td><td>${factorial(i)}</td></tr>`) // Una columna con dos celdas para mostrar cada par
}

document.write('</table>') // Cierro tabla