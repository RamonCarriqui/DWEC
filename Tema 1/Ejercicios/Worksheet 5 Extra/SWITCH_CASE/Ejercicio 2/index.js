/* Crea	un	script	que	pregunte al	usuario	por	un	número,	y	determine	si	es	par,	si	es	múltiplo	de	tres,	y	
si	es	múltiplo de	5.*/

num = parseInt(prompt("Introduce un número"));

if (num % 2 == 0){
    comprobacion = "Par";
}
else if(num % 3 == 0){
    comprobacion = "Multiplo de 3";
}
else {
    comprobacion = "Multiplo de 5";
}

switch (comprobacion){
    case "Par":
        alert("Es par");
        break;

    case "Multiplo de 3":
        alert("Múltiplo de 3");
        break;

    case "Multiplo de 5":
        alert("Múltiplo de 5");
        break;
}