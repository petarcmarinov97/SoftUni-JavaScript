function solve (input) {
    let n = Number(input.shift());
    let current = 1;
    let isBigger = false;
    let printline = "";

    for (let rows = 1; rows <= n; rows++){
        for (let cols = 1; cols <= rows; cols++){
            if (current>n) {
                isBigger = true;
                break;
            }
            printline += current + " ";
            current++;
        }

        console.log(printline);
        printline = "";
        if (isBigger){
            break;
        }
    } 
}