function solution(input) {
    let string = input.shift();
    let items = [];
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let totalCal = 0
    let regex = pattern.exec(string);
    while (regex) {
        items.push({ item: regex[2], day: regex[3], cal: regex[4] });
        totalCal += Number(regex[4])
        regex = pattern.exec(string);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    for (let i = 0; i < items.length; i++) {
        console.log(`Item: ${items[i].item}, Best before: ${items[i].day}, Nutrition: ${items[i].cal}`);
    }
  }