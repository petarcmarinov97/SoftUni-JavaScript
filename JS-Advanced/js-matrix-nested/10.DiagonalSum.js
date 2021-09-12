function solve(matrix) {

    let firstDia = 0;
    let secondDia = 0;


    for (let i = 0; i < matrix.length; i++) {
        firstDia += matrix[i][i];
        secondDia += matrix[i][matrix.length - i - 1];
    }

    console.log(firstDia, secondDia);

}
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])