function solve(input) {
    let heroes = {};
    let line = input.shift();

    while (line !== "End") {
        let [command, name, spell] = line.split(" ");
        switch (command) {
            case "Enroll":
                if (!heroes.hasOwnProperty(name)) {
                    heroes[name] = [];
                } else {
                    console.log(`${name} is already enrolled.`);
                }
                break;
            case "Learn":
                if (!heroes.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                } else if (heroes[name].includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`)
                } else {
                    heroes[name].push(spell);
                }
                break;
            case "Unlearn":
                if (!heroes.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                } else if (!heroes[name].includes(spell)) {
                    console.log(`${name} doesn't know ${spell}.`)
                } else {
                    let indexSpell = heroes[name].indexOf(spell);
                    let spells = heroes[name];
                    spells.splice(indexSpell, 1)
                    heroes[name] = spells;
                }
                break;
        }
        line = input.shift();
    }
    
    let entries = Object.entries(heroes);

    let sorted = entries.sort((a,b) => {
        if (a[1].length == b[1].length) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].length - a[1].length;
        }
    });

    console.log("Heroes:")
    sorted.forEach(kvp => {
        console.log(`== ${kvp[0]}: ${kvp[1].join(", ")}`);
    })
}
solve([
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End',
    

]);