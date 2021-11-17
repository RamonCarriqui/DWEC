/*crea	un	script	que	pregunte	al	usuario	por	su	nombre,	y	conteste	“Bienvenido”	o	“Bienvenida”	según	
si	el	nombre	introducido	es	de	hombre	o	de	mujer	(nota:	realízalo	sólo	para	los	nombres:	Pablo,	Ana,	
Eduardo	y	Clara).*/
nombre = prompt("Dime tu nombre")

if (nombre == "Pablo" | nombre == "Eduardo"){
    alert("Bienvenido");
}
else if(nombre == "Ana"| nombre == "Clara"){
    alert("Bienvenida");
}