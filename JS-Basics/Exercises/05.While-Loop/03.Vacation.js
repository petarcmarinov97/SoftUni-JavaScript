function solve (input){
    let vacationPrice = Number(input.shift());
    let currentMoney = Number(input.shift());
    let action = input.shift();
    let moneyUsed = Number(input.shift());
    let days = 0;
    let timesSpend = 0;

    while (vacationPrice > currentMoney && timesSpend <5) {
        if (action == "spend"){
            if (moneyUsed > currentMoney){
                currentMoney = 0;
            } else {
                currentMoney -= moneyUsed;
            }
            timesSpend++;
        }
        
        if (action == "save") {
            timesSpend = 0;
            currentMoney += moneyUsed;
        }

        days++;
        action = input.shift();
        moneyUsed = Number(input.shift());
    }
    
    if (currentMoney >= vacationPrice){
        console.log (`You saved the money for ${days} days.`)
    }
    if (timesSpend == 5){
        console.log("You can't save the money.");
        console.log(days);       
    }
}