/*Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles.*/

valor = Math.floor(Math.random()*3);

switch (valor) {
    case 0:
        document.write('<img src = "1.jpg>"');
        break;
    case 1:
        document.write('<img src = ".2jpg>"');
        break;
    case 2:
        document.write('<img src = "3.png>"');
        break;
}
