function solve(arr) {

    const list = {}

    for (const line of arr) {
        let [city, population] = line.split(` <-> `);
        if(!list.hasOwnProperty(city)){
        list[city] = Number(population);
        }else{
            
            list[city]+=Number(population)
        }
    }

    for (const key in list) {

        console.log(`${key} : ${list[key]}`);

    }
}

solve(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000'
    ]
);