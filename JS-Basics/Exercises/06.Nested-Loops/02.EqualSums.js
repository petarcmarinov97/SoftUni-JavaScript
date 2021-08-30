function solve (input) {
    let n1 = Number(input.shift());
    let n2 = Number(input.shift());
    let printline = "";

    for (let i = n1; i <= n2; i++) {
        
        let odd = 0;
        let even = 0;
        let current = i.toString();
        for (let j = 0; j < current.length; j++){
            let currentDigit = Number(current.charAt(j));
            if (j % 2 == 0){
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        
        if (odd == even){
            printline += i + " ";
        }
    }
    console.log(printline);
}