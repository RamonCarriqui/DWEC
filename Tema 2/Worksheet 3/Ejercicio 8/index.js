/**Implementa una función que tomando como entrada una cadena de texto sea
capaz de contabilizar el numero de palabras. Ten en cuenta que entre dos palabras
puede haber más de 1 blanco, e incluso pueden aparecer al principio o final de ésta.
 */

function cuenta(){
    let cadena = 'JavaScript es un lenguaje de programación';
    let palabras = cadena.split(' ');
    let contador = 0;

    for (i of palabras){
        contador += 1;
    }
    return contador;
}
document.write(cuenta());