cad = 'oso';

function reverseString(str) {
    var splitString = str.split("");
    splitString = splitString.reverse();
    splitString = splitString.join(""); 
    return splitString;
}


function espalindromo(cad){
    invertida = reverseString(cad);
    if (cad.toLowerCase() === invertida.toLowerCase()){
        console.log(cad + ' es un palíndromo');
    }
    else{
        console.log(cad + ' no es un palíndromo');
    }
}

espalindromo(cad);