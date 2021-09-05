function solve(input) {
    let massage = input.shift();
    let line = input.shift();
    while (line !== "Reveal") {
        let [command, firstArg, secondArg] = line.split(":|:");
        switch (command) {
            case "InsertSpace":
                massage = massage.substring(0, firstArg) + " " + massage.substring(firstArg);
                console.log(massage);
                break;
            case "Reverse":
                if (massage.includes(firstArg)) {
                    let reversedSubstr = firstArg.split("").reverse().join("");
                    massage = massage.replace(firstArg, "");
                    massage = massage.concat(reversedSubstr);
                    console.log(massage);
                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                let startIndex = massage.indexOf(firstArg);
                while (startIndex > -1) {
                    massage = massage.replace(firstArg, secondArg);
                    startIndex = massage.indexOf(firstArg);
                }
                console.log(massage);
                break;
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${massage}`);
}