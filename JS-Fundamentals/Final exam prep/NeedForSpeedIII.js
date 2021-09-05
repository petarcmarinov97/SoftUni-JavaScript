function solve(input) {
    let numberOfCars = input.shift();
    let cars = {};

    for (let i = 0; i < numberOfCars; i++) {
        let [model, mileage, fuel] = input.shift().split("|");
        cars[model] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }

    let currentCommand = input.shift();

    while (currentCommand !== "Stop") {
        let [command, car, firstArg, secondArg] = currentCommand.split(" : ");
        switch (command) {
            case "Drive":
                if (cars[car]["fuel"] < Number(secondArg)) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    cars[car]["fuel"] = cars[car]["fuel"] - Number(secondArg);
                    cars[car]["mileage"] = cars[car]["mileage"] + Number(firstArg);
                    console.log(`${car} driven for ${firstArg} kilometers. ${secondArg} liters of fuel consumed.`);
                    if (cars[car]["mileage"] >= 100000) {
                        delete cars[car];
                        console.log(`Time to sell the ${car}!`);
                    }
                }
                break;
            case "Refuel":
                let oldFuel = cars[car]["fuel"];
                if ((oldFuel + Number(firstArg)) > 75) {
                    cars[car]["fuel"] = 75;
                    console.log(`${car} refueled with ${75 - oldFuel} liters`);
                } else {
                    cars[car]["fuel"] = cars[car]["fuel"] + Number(firstArg);
                    console.log(`${car} refueled with ${firstArg} liters`);
                }
                break;
            case "Revert":
                if (((cars[car]["mileage"] - Number(firstArg))) >= 10000) {
                    console.log(`${car} mileage decreased by ${firstArg} kilometers`);
                }
                cars[car]["mileage"] = Math.max((cars[car]["mileage"] - Number(firstArg)), 10000);
                break;
        }
        currentCommand = input.shift()
    }

    let sortedCars = Object.entries(cars)
    .sort((carOne, carTwo) => {
        if (carTwo[1].mileage == carOne[1].mileage) {
            return carOne[0].localeCompare(carTwo[0]);
        } else {
            return carTwo[1].mileage - carOne[1].mileage;
        }
    });

    sortedCars.forEach(car => {
        console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
    });
}