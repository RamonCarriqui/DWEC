/*Crea	un	script	que	pida	un	número	al	usuario,	y	si	ese	número	es	superior	a	100	le	aplique	un	
descuento	del	15%,	mostrando	el	nuevo	número	en	pantalla.*/
precio = prompt("Dime un precio")

if (precio >= 100){
    descuento = precio*15/100
    alert("El precio con 15% de descuento es "+ (precio-descuento));
}else{
    alert("El precio total es "+precio);
}