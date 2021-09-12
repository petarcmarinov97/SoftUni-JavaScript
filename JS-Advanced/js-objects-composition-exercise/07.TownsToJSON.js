function solve(array) {

    array.shift();
    return JSON.stringify(
        array.map(line => {
            [Town, Latitude, Longitude] = line
                .split(/\| | \| | \|/g)
                .filter(x => x !== '')
                .map(x => isNaN(x) ? x : Number(Number(x).toFixed(2)));
            return {
                Town,
                Latitude,
                Longitude,
            }
        }));
}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]))