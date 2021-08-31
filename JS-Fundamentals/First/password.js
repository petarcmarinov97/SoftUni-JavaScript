function solve(password) {

    let v1 = isLengthEnough(password);
    let v2 = isAlphabetical(password);
    let v3 = isContainsTwoDigits(password);

    if (!v1) {
        console.log('Password must be between 6 and 10 characters');
    };

    if (!v2) {
        console.log('Password must consist only of letters and digits');
    }

    if (!v3) {
        console.log('Password must have at least 2 digits');
    }

    if(v1 && v2 && v3) {
        console.log('Password is valid')
    }

    function isLengthEnough(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    function isAlphabetical(pass) {

        let isLowerLetter = (c) => c >= 87 && c <= 122;
        let isUpperLetter = (c) => c >= 65 && c <= 90;

        let isOk = true;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            if (!isDigit(n) && !isLowerLetter(n) && !isUpperLetter(n)) {
                isOk = false;
                break;
            }
        }

        return isOk;
    }

    function isContainsTwoDigits(pass) {

        let counter = 0;
        let isOk = false;

        for (let char of pass) {
            let n = char.charCodeAt(0);

            if (isDigit(n)) {
                counter++;
            }

            if (counter === 2) {
                isOk = true;
                break;
            }
        }

        return isOk;
    }

    function isDigit(c) {
        return c >= 48 && c <= 57;
    }
}
solve(`Mypass123`)