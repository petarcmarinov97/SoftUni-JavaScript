function nums(arr) {

    let result = []

    while (arr.length > 0) {
        let currentNum = arr.shift();
        if (currentNum < 0) {
            result.unshift(currentNum);
        } else {
            result.push(currentNum)
        }
    }
    for (const number of result) {
        console.log(number)
    }
}
nums([7, -2, 8, 9])