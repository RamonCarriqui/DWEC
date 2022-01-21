/*Crea una pagina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:*/

document.write((fechaHoy = new Date())+"<br>");

fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
document.write((fecha85) +"<br>");

fecha187 = new Date()
fecha187.setDate(fecha187.getDate() - 187);
document.write((fecha187)+"<br>");

fecha85.setFullYear(fecha85.getFullYear()+2);
document.write((fecha85)+"<br>");

fecha187.setDate(fecha187.getDate()-1);
document.write((fecha187)+"<br>");

fechaResto = fecha85 - fecha187;
document.write(fechaResto);
