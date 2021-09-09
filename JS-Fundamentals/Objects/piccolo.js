function solve(input) {

    //[direction, carNumber]
    let parking = {} //{ `CA2844AA`: 1 }

    for (const line of input) {

        let [direction, carNumber] = line.split(`, `);
        if (direction == `IN`) {
            parking[carNumber] = 1;
        }  else {
            delete parking[carNumber];
        }

    }

let result=Object.keys(parking)
.sort((a,b)=> a.localeCompare(b))
.join(`\n`);

return result ? result: `Parking Lot is Empty`

}
console.log(solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

))