function solve(input) {
    let text = input.shift();
    let pattern = /(@|#)[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let pairs = text.match(pattern);

    mirrorWords = [];

    if (pairs) {
        pairs.forEach(pair => {
            let [wordOne, wordTwo] = pair.split(/[@#]+/).filter(x => x !== "");
            let wordTwoMirror = wordTwo.split("").reverse().join("");
            if (wordOne === wordTwoMirror) {
                mirrorWords.push(`${wordOne} <=> ${wordTwo}`);
            }
        }); 
    }

    if (pairs) {
        console.log(`${pairs.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }

    if (mirrorWords.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    }
    
}
solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])