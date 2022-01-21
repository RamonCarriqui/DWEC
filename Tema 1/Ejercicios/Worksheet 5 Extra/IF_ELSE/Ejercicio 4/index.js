/*Crea	un	script	que	pregunte	al	usuario	el	número	de	hermanos	que	tiene	y	una	cantidad.	En	el	caso	
de	que	el	usuario	tenga	más	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	15%	de	descuento.	Si	el	
usuario	tiene	menos	de	tres	hermanos,	se	mostrará	la	cantidad	con	un	5%	de	descuento.	Si	no	tiene	
hermanos	se	mostrará	la	cantidad	sin	descuento.*/
cantidad = prompt("Introduce una cantidad");
hermanos = prompt("¿Cuántos hermanos tienes?");

if (hermanos >= 3){
    descuento = cantidad*15/100
    alert("El pago final es de "+(cantidad-descuento));
}
else if (hermanos < 3 && hermanos > 0){
    descuento = cantidad*5/100
    alert("El pago final es de "+(cantidad-descuento));
}
else{
    alert("El pago final es de "+cantidad);
}