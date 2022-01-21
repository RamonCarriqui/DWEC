/*Almacena la edad del usuario, su localidad de nacimiento y muestra
por pantalla "Enhorabuena" a los usuarios de más de 25 años de Madrid*/
edad = prompt("Introduce tu edad");
ciudad = prompt("Introduce tu luga de nacimiento");

if (edad >=25 && ciudad == "Madrid"){
    alert("Enhorabuena!!!");
}else{
    alert("Lo siento :(");
}