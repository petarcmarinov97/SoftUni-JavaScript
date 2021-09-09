function solve(input) {

    //VIP and Regular
    let list = {
        vip: [],
        regular: []
    }

    let name=input.shift()
    while (name !== `PARTY`) {
        let char = name[0];
        if (isNaN(char)) {
            //regular
            list.regular.push(name)
        } else {
            //vip
            list.vip.push(name)
        }
        name=input.shift();
    }

    //remove `PARTY`
    input.forEach(guest => {
            if (list.vip.includes(guest)) {
                let index = list.vip.indexOf(guest);
                list.vip.splice(index, 1);
            } else if (list.regular.includes(guest)) {
                let index = list.regular.indexOf(guest);
                list.regular.splice(index, 1);
            }
        });

    console.log(list.vip.length + list.regular.length);
    console.log(`${list.vip.join(`\n`)}\n${list.regular.join(`\n`)}`);
    //let print = Object.values(list);
    // print.forEach(el => {
    //console.log(el.join(`\n`))
    //});

}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
])