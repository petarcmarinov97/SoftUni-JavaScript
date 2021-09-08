function solve([collection, ...commands]) {
    collection = collection.map(Number);
    let indexEndCommands = commands.indexOf('end');
    commands = commands.slice(0, indexEndCommands);
    commands.forEach(x => {
        if (x.startsWith('reverse')) {
            let [start, count] = x
                .replace('reverse from ', '')
                .replace('count ', '')
                .split(' ')
                .map(Number);
            if (start < 0) {
                start = collection.length + start
            };
            reversedSubset = collection.slice(start, start + count).reverse();
            collection.splice(start, count, ...reversedSubset);
        } else if (x.startsWith('sort')) {
            let [start, count] = x
                .replace('sort from ', '')
                .replace('count ', '')
                .split(' ')
                .map(Number);
            if (start < 0) {
                start = collection.length + start
            };
            sortedSubset = collection.slice(start, start + count).sort((a, b) => a - b);
            collection.splice(start, count, ...sortedSubset);
        } else if (x.startsWith('remove')) {
            let count = Number(x.replace('remove ', ''));
            collection.splice(0, count);
        }
    })
    console.log(collection.join(', '));
}
solve(([["1", "2", "5", "8", "7", "3", "10", "6", "4", "9"],
"remove 2",
"end"])

)