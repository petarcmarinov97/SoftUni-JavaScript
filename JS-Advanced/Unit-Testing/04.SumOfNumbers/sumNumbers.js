function sumNumbers(arr) {
    let sum = 0;
    for (const num of arr){
        sum += Number(num);
    }
    return sum;
}

module.exports = sumNumbers ;