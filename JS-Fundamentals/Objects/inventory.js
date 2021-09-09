function solve(arr) {

    let heroes = [];

    for (const line of arr) {
        let [hero, level, items] = line.split(` / `);
        level = Number(level)
        items = items.split(`, `).sort((a, b) => a.localeCompare(b)).join(`, `)

        let heroObj = {
            Hero: hero,
            level: level,
            items: items
        }
        heroes.push(heroObj);
    }

    heroes
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero=> ${hero.Hero}`);
            console.log(`level=> ${hero.level}`);
            console.log(`items=> ${hero.items}`);
        })
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])