function solve(array) {

    let numberOfCommands = Number(array.shift());
    let plantObj = {};

    for (let i = 0; i < numberOfCommands; i++) {

        let [plant, rarity] = array[i].split('<->');
        rarity = Number(rarity);

        plantObj[plant] = { rarity, rating: 0 }

    }
    for (let i = numberOfCommands; i < array.length; i++) {

        let command = array[i].split(': ')

        if (command[0] === 'Rate') {
            let [plant, rate] = command[1].split(' - ');
            rate = Number(rate);

            if (plantObj[plant]) {

                if (plantObj[plant].rating > 0) {
                    plantObj[plant].rating.push(rate)


                } else {
                    plantObj[plant].rating = [rate]

                }
            } else {
                console.log('error');
            }
        } else if (command[0] === 'Update') {
            let [plant, rarity] = command[1].split(' - ');
            if (plantObj[plant]) {
                plantObj[plant].rarity = Number(rarity)
            } else {
                console.log('error');
            }
        } else if (command[0] === 'Reset') {
            let plant = command[1]
            if (plantObj[plant]) {
                
                plantObj[plant].rating = 0
            }else {
                console.log('error');
            }
        } else if (command[0] === 'Exhibition') {
            break;
        }
    }
    let sortation = Object.entries(plantObj)
    sortation.forEach(line => {
        if (line[1].rating != 0) {
            let fullRate = line[1].rating.length
            let total = line[1].rating.reduce((sum, x) => sum + x);
            line[1].rating = total / fullRate
        }
    })
    let sort = sortation.sort((a, b) => {

        if (b[1].rarity - a[1].rarity != 0) {
            return b[1].rarity - a[1].rarity
        } else {
            return b[1].rating - a[1].rating
        }
    })
    console.log(`Plants for the exhibition:`)
    sort.forEach(line => console.log(`- ${line[0]}; Rarity: ${line[1].rarity}; Rating: ${line[1].rating.toFixed(2)}`))

}
solve(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
    ])