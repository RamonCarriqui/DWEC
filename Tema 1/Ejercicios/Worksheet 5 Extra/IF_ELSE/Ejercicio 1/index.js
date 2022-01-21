/*Crea	un	script	que	pida	al	usuario	su	nombre	y	apellidos.	Si	el	nombre	es	“Ricardo”,	debe	mostrar	en	
pantalla	los	apellidos;	si	el	nombre	no	es	“Ricardo”,	debe	escribir	en	el	documento	HTML	los	apellidos.*/

nombre = prompt("Dime tu nombre");
apellidos = prompt("Escribe tus apellidos");

 if (nombre == "Ricardo"){
     alert(apellidos); 
}
else if (nombre != "Ricardo"){
    document.write(apellidos);
}
