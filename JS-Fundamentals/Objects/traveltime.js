function travelTime(arr) {
 
    let result = {};
 
    for (let line of arr) {
 
        let [state, town, price] = line.split(" > ").map(x=>x.trim());
 
        town = town.charAt(0).toUpperCase() + town.slice(1);
 
        if (!result.hasOwnProperty(state)) {
            result[state] = {};
        }
        if (!result[state].hasOwnProperty(town)) {
            result[state][town] = Number.POSITIVE_INFINITY;
        }
        if (result[state].hasOwnProperty(town)) {
            if ( result[state][town] > Number(price)) {
                result[state][town] = Number(price);
            }
        }
    }
    let sortedStates = Object.keys(result).sort((a, b)=>{
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
 
    for (let state of sortedStates) {
        let innerResult = "";
        innerResult += (state + " -> ");
 
        let sortedTownsByPrice = Object.keys(result[state]).sort((t1,t2)=>{
            "use strict";
            return result[state][t1] - result[state][t2];
        });
 
        for (let obj of sortedTownsByPrice) {
            innerResult += (obj + " -> ");
            innerResult += (result[state][obj]+ " ");
        }
 
        console.log(innerResult.trim());
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )