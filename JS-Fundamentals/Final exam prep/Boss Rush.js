function solve(input) {
    let number = input.shift();
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/;
    for (let i = 0; i < number; i++) {
        let line = input.shift();
        let match = pattern.exec(line);
        if (match) {
            let name = match.groups["name"];
            let title = match.groups["title"];
            console.log(`${name}, The ${title}`);
            console.log(`>> Strength: ${name.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}
solve([
'3',
'|PETER|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#'

]);