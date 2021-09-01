function solve(arr) {
    let topIntegers = []
    for (let index = 0; index < arr.length; index++) {
        let isTop = true;

        for (let j = index + 1; j < arr.length; j++) {
            if (arr[index] <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(arr[index]);
        }
    }
    console.log(topIntegers.join(` `));
}
solve([14, 24, 3, 19, 15, 17])