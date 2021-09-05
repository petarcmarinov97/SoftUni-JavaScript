function solve(input) {
    let guests = {};
    let infoLine = input.shift();
    let unlikedMeals = 0;
    while (infoLine !== "Stop") {
        let [command, name, meal] = infoLine.split("-");
        switch (command) {
            case "Like":
                if (guests.hasOwnProperty(name)) {
                    if (!guests[name].includes(meal)) {
                        guests[name].push(meal);
                    }
                } else {
                    guests[name] = [meal];
                }
                break;
            case "Unlike":
                if (guests.hasOwnProperty(name)) {
                    if (guests[name].includes(meal)) {
                        let indexMeal = guests[name].indexOf(meal);
                        guests[name].splice(indexMeal, 1);
                        let newMeals = guests[name];
                        guests[name] = newMeals;
                        unlikedMeals++;
                        console.log(`${name} doesn't like the ${meal}.`)
                    } else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${name} is not at the party.`);
                }
                break;
        }
        infoLine = input.shift();
    }
    
    let entries = Object.entries(guests);
    let sortedGuest = entries.sort((a,b) => {
        if (a[1].length == b[1].length) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].length - a[1].length;
        }
    });

    sortedGuest.forEach(guest => {
        console.log(`${guest[0]}: ${guest[1].join(", ")}`);
    });
    console.log(`Unliked meals: ${unlikedMeals}`);
}
solve([
    "Like-Krisi-shrimps",
    "Unlike-Vili-carp",
    "Unlike-Krisi-salad",
    "Unlike-Krisi-shrimps",
    "Stop",
    
    

]);