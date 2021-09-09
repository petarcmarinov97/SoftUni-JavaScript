function solve(arrk) {
    let k = arrk.shift();
    let newArr = [];

    let firstElements = arrk.slice(0, k)
    let lastElements = arrk.slice(arrk.length - k);

    let firstResult = ``;
    let lastResult = ``;
    for (let i = 0; i < k; i++) {
        firstResult += ` ${firstElements[i]}`;
        lastResult += ` ${lastElements[i]}`;
    }
    console.log(firstResult);
    console.log(lastResult);
}
solve([3,
    7, 8, 9
])