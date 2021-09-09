function solve(input) {
    //Извличаме вагоните и гри превръщаме в масив със shift().split(` `)
    let wagons = input.shift().split(` `);
    //Извличаме максималния брой на пътници във вагон със shift()
    let maxCap = Number(input.shift())

    //Създаваме команди
    for (const line of input) {
        let [command, digit] = line.split(` `); //Извличаме командите от реда както и числото или само числото


        //Проверяваме ако командата е Add използваме функцията push и слагаме числото най-отзад на масива wagons
        if (command === `Add`) {
            wagons.push(digit)
        } else {
            //Ако командата не е Add следователно е число и трябва да намерим къде да допълним в кой точно елемент
            for (let i = 0; i < wagons.length; i++) {
                let numwag = Number(wagons[i]);
                let numwag1 = Number(wagons[i + 1])
                let numcommand = Number(command);
                //Проверяваме дали сбора е под 75, ако е следователно добавяме числото в този елемент
                if (numwag + numcommand <= maxCap) {
                    wagons[i] = numwag + numcommand;
                    break;
                }
                //Ако е над 75 проверяваме следващия елемент и ако той е празен добавяме там числото
                else {
                    if (numwag1 + numcommand <= maxCap) {
                        wagons[i + 1] = numwag1 + numcommand;
                        break;
                    }
                }
            }
        }
    }
    //Извеждаме вече полученият масив в краен вид с разстояние между елементите в него
    console.log(wagons.join(` `))
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])