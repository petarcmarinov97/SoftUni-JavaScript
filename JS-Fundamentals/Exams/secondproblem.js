function solve(input) {
    let coffees = input.shift().split(' ');
    const commandsCount = Number(input.shift());
    const actions = input.slice(0, commandsCount + 1);
    actions.forEach(x => {
        const [command, firstArg, number] = x.split(' ');
        switch (command) {
            case 'Include':
                coffees.push(firstArg);
                break;
            case 'Remove':
                if(coffees.length > number) {
                    switch (firstArg) {
                        case 'first':
                           coffees.splice(0, Number(number));
                            break;
                        case 'last':
                            coffees.splice(coffees.length - Number(number), Number(number));
                            break;
                    }
                }
                break;
            case 'Prefer':
                const firstCoffee = coffees[Number(firstArg)];
                coffees[Number(firstArg)] = coffees[Number(number)];
                coffees[Number(number)] = firstCoffee;
                break;
            case 'Reverse':
                coffees = coffees.reverse();
                break;
        }
    });
    console.log(`Coffees:\n${coffees.join(' ')}`);
}
solve(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
    "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse"
])