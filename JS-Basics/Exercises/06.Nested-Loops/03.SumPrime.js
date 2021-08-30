function solve (input) {
    let n = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (n !== "stop") {
        let num = Number(n);
        if (num < 0){
            console.log("Number is negative.");
        } else {
            let count = 0;
            for (let i = 1; i <= num; i++){
                if (num % i == 0) {  
                    count++;
                }
            }
            if (count === 2) {
                sumPrime += num;
            } else {
                sumNonPrime += num;
            }

        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}