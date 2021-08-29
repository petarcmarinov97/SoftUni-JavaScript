function sum(number) {
    let n = Number(number[0]);

    let sum = 0;

    let i = 1;

    while (sum < n) {

        let currentNum = Number(number[i]);

        sum += currentNum;

        i++;

    }

    console.log(sum);
}