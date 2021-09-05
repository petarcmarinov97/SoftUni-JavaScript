function solve(input) {
    let message = input.shift();
    let infoLine = input.shift();

    while (infoLine !== "Finish") {
        let [command, firstArg, secondArg] = infoLine.split(" ");
        switch (command) {
            case "Replace":
                while (message.includes(firstArg)) {
                    message = message.replace(firstArg, secondArg);
                }
                console.log(message);
                break;
            case "Cut":
                let startIndex = Number(firstArg);
                let endIndex = Number(secondArg);
                if (message.charAt(startIndex) && message.charAt(endIndex)) {
                    let substring = message.substring(startIndex, endIndex + 1);
                    message = message.replace(substring, "");
                    console.log(message);
                } else {
                    console.log("Invalid indexes!");
                }
                break;
            case "Make":
                if (firstArg == "Upper") {
                    message = message.replace(message, message.toUpperCase());
                } else if (firstArg == "Lower") {
                    message = message.replace(message, message.toLowerCase());
                }
                console.log(message);
                break;
            case "Check":
                if (message.includes(firstArg)) {
                    console.log(`Message contains ${firstArg}`);
                } else {
                    console.log(`Message doesn't contain ${firstArg}`);
                }
                break;
            case "Sum":
                let start = Number(firstArg);
                let end = Number(secondArg);
                if (message.charAt(start) && message.charAt(end)) {
                    let substrChars = message.substring(start, end + 1);
                    let sum = 0;
                    for (let char of substrChars) {
                        sum += char.charCodeAt(0);
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indexes!");
                }
                break;
        }
        infoLine = input.shift();
    }
}
solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish',
    
    

]);