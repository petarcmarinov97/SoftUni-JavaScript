function solve(input) {
    let miner = {};
 
    for(let i = 0; i < input.length; i++) {
        let resource = '';
        let quantity = 0;
 
        if(i % 2 == 0) {
            resource = input[i];
            quantity = Number(input[i + 1]);
 
            if(!miner.hasOwnProperty(resource)) {
                miner[resource] = quantity;
            } else {
                miner[resource] += quantity;
            }
        }
    }
 
    for(let [key, value] of Object.entries(miner)) {
        console.log(`${key} -> ${value}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )