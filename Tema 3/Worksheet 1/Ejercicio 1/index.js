function maximo(lista) {
	let mayor = lista[0]; // Por defecto el primer valor será el mayor

	for (numero of lista){ // Por cada valor compruebo que si es mayor que el establecido como mayor en la variable
		if (mayor<numero) {
			mayor = numero; // Si es menor almaceno como número mayor el siguiente de la lista
		};
	};
	return mayor // Devuelvo el último valor guardado como el mayor
};

var numeros = prompt("Escribe 4 numeros separados por comas(',')"); // Pido un array separado por comas

var lista = numeros.split(','); // Utilizo las comas para separar en valores con split

document.write(`El numero mas grande es: ${maximo(lista)}`) // Paso la lista a la función