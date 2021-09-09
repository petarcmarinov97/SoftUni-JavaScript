function solve(input1, input2) {
    //Взимаме нужната информация от втория масив
    let countTaken = Number(input2[0]);
    let countBeDel = Number(input2[1]);
    let numSearch = Number(input2[2]);

    //Взимаме нужния брой елементи от първи масив;
    let newArr = input1.splice(0, countTaken);

    //Премахваме нужния брой елементи от ляво на дясно(от първи към последен)
    for (let i = 0; i < countBeDel; i++) {
        newArr.shift();
    }

    //Търсене на елемент във масива
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === numSearch) {
            count++;
        }
    }
    console.log(`Number ${numSearch} occurs ${count} times.`)

}
solve([5, 2, 3, 4, 1, 6, 7, 3, 3, 5],
    [9, 2, 3]
)