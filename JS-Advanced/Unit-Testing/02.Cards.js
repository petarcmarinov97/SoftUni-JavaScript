function solve(face, suit) {
    const validFaces = [`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`,`10`, `J`, `Q`, `K`, `A`];

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',

    }

    if (validFaces.includes(face) == false) {
        throw new Error(`Invalid Face`);
    } else if (Object.keys(suits).includes(suit) == false) {
        throw new Error(`Invalid Suit`)
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${suits[suit]}`;
        }
    };
}

const cart=solve(`J`,`D`);
console.log(cart);
console.log(`${cart}`);
