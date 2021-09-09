function farming(str) {
    let input = str.toLowerCase().split(' ');
    let legendary = { fragments: 0, shards: 0, motes: 0 };
    let junk = {};
    let hasToBreak = false;
    while (!hasToBreak && input.length > 0) {
        let quantity = +input.shift();
        let material = input.shift();
        switch (material) {
            case 'shards':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            case 'fragments':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Valanyr obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            case 'motes':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }
                junk[material] += quantity;
                break;
        }
    }
    let legendItems = Object.entries(legendary)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
 
    let junkItems = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
}
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')