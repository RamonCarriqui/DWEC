function saddlepoint(arr) {

    let max, min;

    for (i = 0; i < arr.length; i++)
        for (j = 0; j < arr[i].length; j++) {

            let columna = [];
            // Calculo el máximo de la fila
            max = Math.max(...arr[i]);
            
            // Calculo el minimo de la columna
            for (k = 0; k < arr[i].length; k++) {
                columna.push(arr[j][k]);
            }

            min = Math.min(...columna);

            if (arr[i][j] >= max && arr[i][j] <= min) {
                console.log(i + ", " + j)

            }
        }

}
a = [[1, 3, 2, 7], [1, 3, 2, 8], [1, 3, 2, 3], [1, 3, 2, 7]];

saddlepoint(a);