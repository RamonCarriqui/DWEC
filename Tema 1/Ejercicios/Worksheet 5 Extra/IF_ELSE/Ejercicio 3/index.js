/*Crea	un	script	que	pregunte	la	edad,	y	determine	
si	debes	estar	en	el	jardín	de	infancia	(menores	de	
5	años),	en	primaria	(entre	6	y	11),	
en	la	ESO	(entre	12	y	16),	en	Bachillerato	o	Ciclos	(entre	17	y	21)	o	en	
la	Universidad	(más	de	21).*/

edad = prompt("Escribe tu edad");

if (edad < 5){
    alert("Debes ir al jardin de infancia");
}
else if (edad >= 6 && edad <= 11){
    alert("Debes ir al primaria");
}
else if (edad >= 12 && edad <= 16){
    alert("Debes ir a la ESO")
}
else if (edad >= 17 && edad <= 21){
    alert("Debes ir a Bachillerato o estudiar un Ciclo")
}
else{
    alert("Debes ir a la Universidad");
}