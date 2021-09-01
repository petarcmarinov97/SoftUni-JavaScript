function solve(arr) {


    //Функция за обръщане на числото
    function reverseN(n) {
        reversedN=[];
        while (n > 0) {
            let lastDigit = n % 10;
            reversedN+=lastDigit;
            n=parseInt(n/10);
        }
        return Number(reversedN);
    }

    //Функция за проверка дали числата от масива са равни на обърнатото число от функцията
    function check(arr){
        for (let number of arr) {
            console.log(number==reverseN(number))
        }
    }

    check(arr)
    
}
solve([123, 323, 421, 121])