function sumEveryOther(array) {
    let contador = 1;
    let suma = 0;

    for (i of array) { // Si utilizas el FOR IN obtienes diréctamente la posición del valor
                        // for (i in array).....suma+= array[i]

        if (contador % 2 !== 0);
        suma += i;
        contador += 1;
    }
    return suma;
}

array1 = [5, 6, 3, 4, 1];
array2 = [10, 2, 11];

document.write(sumEveryOther(array1));
document.write("<br>");
document.write(sumEveryOther(array2));