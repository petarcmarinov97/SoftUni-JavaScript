function solve(priceRatings, entry, type) {
    const entryValue = priceRatings[entry];
    let leftSideValue = 0;
    let rightSideValue = 0;
    if (type === 'cheap') {
        leftSideValue = priceRatings
            .slice(0, entry)
            .filter(x => x < entryValue)
            .reduce((acc, x) => acc += x, 0);
        rightSideValue = priceRatings
            .slice(entry + 1)
            .filter(x => x < entryValue)
            .reduce((acc, x) => acc += x, 0);
    } else if (type === 'expensive') {
        leftSideValue = priceRatings
            .slice(0, entry)
            .filter(x => x >= entryValue)
            .reduce((acc, x) => acc += x, 0);
        rightSideValue = priceRatings
            .slice(entry + 1)
            .filter(x => x >= entryValue)
            .reduce((acc, x) => acc += x, 0);
    }
 
    if (rightSideValue <= leftSideValue) {
        console.log(`Left - ${leftSideValue}`);
    } else if (rightSideValue > leftSideValue) {
        console.log(`Right - ${rightSideValue}`);
    }
}