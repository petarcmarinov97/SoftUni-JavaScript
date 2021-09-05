function solve(input) {
    let count = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/;
    for (let i = 0; i < count; i++) {
        let infoLine = input.shift();
        let match = pattern.exec(infoLine);
        if (match) {
            let message = match.groups["message"];
            let command = match.groups["command"];
            let encrypted = [];
            for (let char of message) {
                encrypted.push(char.charCodeAt(0));
            }
            console.log(`${command}: ${encrypted.join(" ")}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
    ]);