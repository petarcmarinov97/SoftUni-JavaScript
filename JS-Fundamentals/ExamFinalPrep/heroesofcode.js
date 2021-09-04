function solve(arr) {
    let heroNumber = Number(arr.shift());
    let heroes = {};
 
    while (heroNumber > 0) {
        let [heroName, health, mana] = arr.shift().split(' ');
        health = Number(health);
        mana = Number(mana);
        heroes[heroName] = { hp: health, mp: mana };
 
        heroNumber--;
    }
 
    let command = arr.shift();
 
    while (command !== 'End') {
        let tokens = command.split(' - ');
 
        switch (tokens[0]) {
            case 'CastSpell': castSpell(tokens[1], tokens[2], tokens[3]); break;
            case 'TakeDamage': takeDamage(tokens[1], tokens[2], tokens[3]); break;
            case 'Recharge': recharge(tokens[1], tokens[2]); break;
            case 'Heal': heal(tokens[1], tokens[2]); break;
        }
 
        command = arr.shift();
    }
 
    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
 
        if (heroes[heroName].mp - mpNeeded >=0) {
            heroes[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
 
    }
 
    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);
 
        if (heroes[heroName].hp - damage > 0) {
            heroes[heroName].hp -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }
 
    function recharge(heroName, amount) {
        amount = Number(amount);
 
        if (heroes[heroName].mp + amount > 200) {
            let buff = 200 - heroes[heroName].mp;
            heroes[heroName].mp = 200;
            console.log(`${heroName} recharged for ${buff} MP!`);
        } else {
            heroes[heroName].mp += amount;
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
    }
 
    function heal(heroName, amount) {
        amount = Number(amount);
 
        if (heroes[heroName].hp + amount > 100) {
            let buff = 100 - heroes[heroName].hp;
            heroes[heroName].hp = 100;
            console.log(`${heroName} healed for ${buff} HP!`);
        } else {
            heroes[heroName].hp += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }
 
    let nameSort = Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0]));
    let hpSort = nameSort.sort((a, b) => b[1].hp - a[1].hp);
 
 
    for (let kvp of hpSort) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].hp}`);
        console.log(`  MP: ${kvp[1].mp}`);
    }
}
solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])