/**Realizar un función que permita localizar todas las apariciones de una subcaden
dentro de otra. */

cad = "Esto es una prueba de una funcion";
fin = false;
posicion = 0;

while(!fin){
    posicion=cad.indexOf("una", posicion+1);

    if(posicion == -1)
        fin = true;
    else{
        console.log(posicion);
    }
        
}