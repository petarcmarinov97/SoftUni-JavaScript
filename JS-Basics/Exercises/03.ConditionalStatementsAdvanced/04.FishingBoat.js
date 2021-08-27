function newhome(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fisherman = Number(arg3);
    let finalPrice = 0;

    switch (season) {
        case "Spring":
            finalPrice = 3000;
            if (fisherman <= 6) {
                finalPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                finalPrice *= 0.85;
            } else if (fisherman >= 12) {
                finalPrice *= 0.75;
            }
            break;

        case "Summer":
            finalPrice = 4200;
            if (fisherman <= 6) {
                finalPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                finalPrice *= 0.85;
            } else if (fisherman >= 12) {
                finalPrice *= 0.75;
            }
            break;

        case "Autumn":
            finalPrice = 4200;
            if (fisherman <= 6) {
                finalPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                finalPrice *= 0.85;
            } else if (fisherman >= 12) {
                finalPrice *= 0.75;
            }
            break;

        case "Winter":
            finalPrice = 2600;
            if (fisherman <= 6) {
                finalPrice *= 0.9;
            } else if (fisherman >= 7 && fisherman <= 11) {
                finalPrice *= 0.85;
            } else if (fisherman >= 12) {
                finalPrice *= 0.75;
            }
            break;
    }
    if (fisherman % 2 == 0 && season !== "Autumn") {
        finalPrice *= 0.95
    }
    if (finalPrice > budget) {
        console.log(`Not enough money! You need ${(finalPrice-budget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(budget-finalPrice).toFixed(2)} leva left.`);
    }
}
