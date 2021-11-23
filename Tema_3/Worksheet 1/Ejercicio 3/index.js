/*Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/

function lanzamiento() {
	return Math.floor(Math.random() * (7 - 1)) + 1
};

function simulacion() {
	uno = 0
	dos = 0
	tres = 0
	cuatro = 0
	cinco = 0
	seis = 0
	for (let i = 0; i <= 6000; i++) {
		num_aleatorio = lanzamiento() // Llamo a lanzamiento y almaceno en el contador correspondiente el valor que sale
		if (num_aleatorio == 1) {
			uno++
		} else if (num_aleatorio == 2) {
			dos++
		} else if (num_aleatorio == 3) {
			tres++
		} else if (num_aleatorio == 4) {
			cuatro++
		} else if (num_aleatorio == 5) {
			cinco++
		} else if (num_aleatorio == 6) {
			seis++
		};
	};
	return (`1: ${uno}<br>2: ${dos}<br>3: ${tres}<br>4: ${cuatro}<br>5: ${cinco}<br>6: ${seis}`) // Devuelvo los contadores
};

document.write(simulacion())