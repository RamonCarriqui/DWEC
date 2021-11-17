/**Crear array con 10 numeros y ordenar creciente y decreciente */

numeros = [1,10,3,85,32,55,76,11,457,12];

//Creciente
document.write(numeros.sort((a,b) => a - b));

document.write("<br>");

//Decreciente
document.write(numeros.sort((a,b) => b - a));
