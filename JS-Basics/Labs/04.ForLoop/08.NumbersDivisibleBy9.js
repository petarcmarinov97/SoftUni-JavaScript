function devisibleby9(arg1, arg2) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let result = 0;
    let buffer = "";

    for (let i = num1; i <= num2; i++) {
        if (i % 9 == 0) {
            result += i;
            buffer += i + " ";
        }
    }
    console.log(`The sum: ${result}`);
    for (let j = num1; j <= num2; j++) {
        if (j % 9 == 0) {
            console.log(j);
        }
    }
}

devisibleby9("100", "200")