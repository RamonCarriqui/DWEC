/*Crea	un	script	que	pida	a	un	usuario	dónde	vive;	si	vive	en	Madrid	y	tiene	entre	18	y	30 años,	el	script	
debe	mostrar	en	pantalla	que	el	usuario	puede	acceder	al	carnet	de	empresarios	emprendedores.*/
edad = prompt("Introduce tu edad");
ciudad = prompt("Introduce tu luga de nacimiento");

if (edad >= 18 && edad <= 30 && ciudad == "Madrid"){
    alert("Puedes acceder al carnet de empresarios emprendedores");
}else{
    alert("Lo siento, no puedes acceder al carnet de empresarios emprendedores");
}