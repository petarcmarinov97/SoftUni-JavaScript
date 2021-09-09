function solve(input) {

    let occurances = {};

    let wordsToFind = input
        .shift()
        .split(` `)
        .forEach(word => {
            occurances[word] = 0;
        });

    input.forEach(w => {
        if (occurances.hasOwnProperty(w)) {
            occurances[w]++;
        }
    })


    //sort 

    return Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a]) //[`this`, `aaaa`]
        .map(w => `${w} - ${occurances[w]}`) //[`this - 3`, `.... - 1`]
        .join(`\n`);


}


console.log(solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]))
