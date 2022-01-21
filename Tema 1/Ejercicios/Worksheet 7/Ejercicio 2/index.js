/*Write a function called addOnlyNums that can take in any number of arguments 
(including numbers or strings), and returns the sum of only the numbers.*/

function addOnlyNums(...arguments) {
    let sum = 0;
    for (valor of arguments) {
        if (typeof (sum) == typeof (valor)) {
            sum += valor;
        }

    }

    return sum;
}

document.write(addOnlyNums(5, "hola", 6, "adios"));
