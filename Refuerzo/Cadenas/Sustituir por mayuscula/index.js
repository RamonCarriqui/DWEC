cad = 'Hola que tal';
x = 'a'

function ponMayus(cad, x) {
    cad = cad.replaceAll(x, x.toUpperCase());
    return cad;
}

console.log(ponMayus(cad, x));