function solve(input) {
    let email = input.shift();

    for (let line of input) {
        if (line == "Complete") {
            break;
        }
        if (line.includes("Make Upper")) {
            email = email.toUpperCase();
            console.log(email);
        }
        if (line.includes("Make Lower")) {
            email = email.toLowerCase();
            console.log(email);
        }
        if (line.includes("GetDomain")) {
            let count=Number(line = line.split(" ")[1]);
            console.log(`${email.substring(email.length - count)}`);
        }
        if (line.includes("GetUsername")) {
            if (email.includes("@")) {
                let user = (email.split("@"))[0];
                console.log(user);
            } else {
                console.log(`The email ${email} doesn't contain the @ symbol.`);
            }
        }
        if (line.includes("Replace")) {
            let char=line = line.split(" ")[1];
            while (email.includes(char)) {
                email = email.replace(char, "-");
            }
            console.log(email);
        }
        if (line.includes("Encrypt")) {
            let result = [];
            for (let i = 0; i < email.length; i++) {
                result.push(email.charCodeAt(i));
            }
            console.log(result.join(" "));
        }
    }
}
solve(["Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"
])