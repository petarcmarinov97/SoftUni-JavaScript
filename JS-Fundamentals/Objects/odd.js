function solve(input) {

    let myMap = new Map();
    input
        .split(` `)
        .forEach(element => {
            element = element.toLowerCase();
            if (!myMap.has(element)) {
                myMap.set(element, 0)
                //myMap[element] = 0;
            }

            //myMap[element]++
            myMap.set(element, myMap.get(element) + 1);

        });

    return Array.from(myMap.keys()) //[`java`, `c#`, `php`, `3`, `1`, `5`]
        .filter(x => myMap.get(x) % 2 !== 0)
        .join(` `)

}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))