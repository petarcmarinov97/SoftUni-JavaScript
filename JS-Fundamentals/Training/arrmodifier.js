function solve(input) {
    //Взимаме първия елемент от инпут, правим го масив, и ги превръщаме в числа дадените елементи
    let arr = input.shift().split(` `).map(Number);

    for (const commands of input) {

        if (commands === `end`) {
            break;
        }
        //Извличаме командата и индексите
        const [action, index1, index2] = commands.split(` `)
        switch (action) {
            case `swap`:
                let temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
                break;

            case `multiply`:
                arr[index1] *= arr[index2]
                break;

            case `decrease`:
                arr = arr.map((x) => x = --x);
                break;
        }
    }
    console.log(arr.join(`, `))



}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])