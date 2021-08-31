function solution(number){

    //Превръщаме числото в стринг
    stringN=number.toString()
    function sum(n){
        let brChetno=0;
        let brNechetno=0
        let sumOdd=0;
        let sumEven=0;
    //Завъртаме цигъл, който ще обходи всеки един елемент от масива(цифра) и ще провери дали е четна или не
        for(let i=stringN.length;i>=0;i--){
            if(stringN[i]%2==0){
                //Добавяме всеки четен елемент като число в декларираната сума;
                sumEven+=Number(stringN[i]);
            }else if(stringN[i]%2==1){
                //Добавяме всеки нечетен елемент като число в декларираната сума;
                sumOdd+=Number(stringN[i])
            }
        }
        console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    }

    sum(number)

}
solution(1000435)
solution(3495892137259234)
solution(224331)