function chars(firstchar, secondchar) {

    //Функция за обработване на дадения символ в стойност по ANSI диаграма
    function getNumber(ch) {
        return ch.charCodeAt(0);
    }

    //Функция за обработване на дадената стойнст в символ по ANSI диаграма
    function getChar(number) {
        return String.fromCharCode(number);
    }

    //Получаваме стойността на дадения символ по ANSI диаграма
    let first = getNumber(firstchar);
    let last = getNumber(secondchar);

    //Намираме макс и мин за да знаем че трябва да се почне от минимум да се редят символите в масива characters
    let min=Math.min(first,last);
    let max=Math.max(first,last);


    //console.log(first, last)

    //Функция изкарваща символите между въведените първи и последен.
    //Също така превръщаме стойността в дадения символ и го прехвърляме в празен низ

    function arrChars(min,max){
        let characters=[]
        for(let i=min+1;i<max;i++){
            let sym=getChar(i);
            characters.push(sym)
        }
        console.log(characters.join(` `));
    }

    //Извикваме arrChars функцията за краен резултат
    arrChars(min,max)

}
chars(`C`,`#`)