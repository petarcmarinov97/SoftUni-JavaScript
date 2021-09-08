function solve(ar) {
    let string = ar.shift().split('|');
    let comands = ar;
    let value = ''
    for (comand of comands) {
        if (comand === 'Done') {
            console.log(`You crafted ${string.join('')}!`);
            break
        }
        if (comand == 'Check Odd' || comand == 'Check Even') {
            let output = []
            if (comand === 'Check Odd') {
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 !== 0) {
                        output.push(string[i])
                    }
                }
            } else if(comand === 'Check Even'){
                for (let i = 0; i < string.length; i++) {
                    if (i % 2 === 0) {
                        output.push(string[i])
                    }
                }
            }
            console.log(output.join(' '));
        } else {
            let com = comand.split(' ');
            let directon = com[1];
            let index = com[2];
 
            if (index < string.length-1 && comand !== "Move Left 0" && comand !==`Move Right ${string.length-1}`) {
 
                if (directon === "Right") {
                    value = string.splice(index, 1)
                    string.splice(index+1, 0, value[0])
                }
                if (directon === 'Left') {
                    value = string.splice(index, 1)
                    string.splice(index - 1, 0, value[0])
 
                }
            }
            console.log(string);
        }
    }
}solve(['ha|Do|mm|om|er', 'Move Right 0', 'Move Left 3', 'Check Odd', 'Move Left 2', 'Move Left 10', 'Move Left 0', 'Done'])