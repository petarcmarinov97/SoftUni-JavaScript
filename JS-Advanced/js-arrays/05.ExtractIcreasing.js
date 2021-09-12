function solve(arr) {
    arr=arr.map(Number)
    let newArr=[]
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= max) {
            max = Number(arr[i])
            newArr.push(max);
        }
    }

    return newArr;

}

console.log(solve([20,
    3,
    2,
    15,
    6,
    1
]))