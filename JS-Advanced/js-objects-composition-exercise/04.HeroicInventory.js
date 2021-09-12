function heroRegister(input) {
    let register = [];
    for (const heroData of input) {
        let hero = {};
        let data = heroData.split('/').map(x => x.trim());
        hero.name = data[0];
        hero.level = Number(data[1]);
        if (data[2]) {
            hero.items = data[2].split(',').map(x => x.trim());
        } else {
            hero.items = [];
        }
        register.push(hero);
    }
 
    return JSON.stringify(register);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));