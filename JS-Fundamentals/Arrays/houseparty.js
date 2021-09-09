function solve(input) {

    let guests = []

    for (let infoLine of input) {
        let info = infoLine.split(` `);
        let name = info[0];
        if (!info.includes(`not`)) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            if (guests.includes(name)) {
                guests = guests.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`)
            }
        }


    }
    console.log(guests.join(`\n`))
}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])