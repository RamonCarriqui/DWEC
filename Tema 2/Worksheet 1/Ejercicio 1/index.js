/*Realiza una p gina que cree un objeto de tipo Date y muestre en la
página la siguiente información (cada una en una l nea)*/
fecha = new Date();

document.write(fecha.getFullYear()+"<br>");
document.write(fecha.getMonth()+"<br>");
document.write(fecha.getDay()+"<br>");
document.write(fecha.getHours()+"<br>");
document.write(fecha.getMinutes()+"<br>");
document.write(fecha.getSeconds());

