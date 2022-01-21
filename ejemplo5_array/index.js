/**EJERCICIO: Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:

Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas) */

array = ["Peras","Manzanas","Kiwis","Platanos","Mandarinas"];

array.splice(1,1); // Posicion y número de elemtos a eliminar y opcional si quieres añadir cosas en esa posición
array.splice(3,0,"Naranjas", "Sandia");
array.splice(1,1,"Cerezas","Nisperos");

document.write(array);