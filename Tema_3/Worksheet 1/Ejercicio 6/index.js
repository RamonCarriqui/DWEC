/*. Crea una función para calcular potencias de un modo recursivo*/

function potencia(base, exponente) {
	if (exponente==0) { // Si vale cero no se hace nada
		return 1;
	}else if (exponente>0) { // Si es mayor que 0, llamo a la función de potencia restando un valor que exponer
		return base * potencia(base,exponente - 1);
	} else if (exponente<0) { // Si es menor que cero, llamo a la función sumando 1 al exponente
		return 1.0 / base *potencia(base,exponente + 1);
	}
};

document.write(potencia(2,2));