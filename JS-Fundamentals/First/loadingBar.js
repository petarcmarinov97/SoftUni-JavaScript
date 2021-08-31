function loadingBar(n) {

    let numPercent = n / 10;
    let percent = `%`
    let dots = `.`

    //Проверка дали n е в интервала от 0 до 100
    let inRange = x => n >= 0 && n <= 100

    //Изчисляване на броя (% и .)които трябва да се изпишат
    function pers(n) {
        return `[${percent.repeat(numPercent)}${dots.repeat(10-numPercent)}]`
    }

    //Изчисляване за завършено или незавършено
    if (10 - numPercent == 0) {
        console.log(`${n}% Complete!\n${pers(n)}`)
    } else {
        console.log(`${n}% ${pers(n)}\nStill loading...`)
    }
}
loadingBar(100)