function solve(matrix) {

    let newArr = [];
    let biggest2 = 0;
    let max = 0;

    for (const row of matrix) {
        for (const el of row) {
            newArr.push(el);
        }
    }

    console.log(Math.max(...newArr));

}
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
])