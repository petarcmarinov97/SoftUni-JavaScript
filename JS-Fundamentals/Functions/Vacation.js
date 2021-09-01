function vacation(arg1, arg2, arg3){
    let groupAmount = Number(arg1);
    let typeGroup = arg2;
    let day = arg3;
    let price = 0;
    let totalPrice = 0;
 
    if (day === "Friday"){
        switch (typeGroup){
            case "Students": price += 8.45; break;
            case "Business": price += 10.9; break;
            case "Regular": price += 15; break;
        }
        totalPrice = groupAmount * price;
    }
    if (day === "Saturday"){
        switch (typeGroup){
            case "Students": price += 9.8; break;
            case "Business": price += 15.6; break;
            case "Regular": price += 20; break;
        }
        totalPrice = groupAmount * price;
    }
    if (day === "Sunday"){
        switch (typeGroup){
            case "Students": price += 10.46; break;
            case "Business": price += 16; break;
            case "Regular": price += 22.5; break;
        }
        totalPrice = groupAmount * price;
    }
 
    if(typeGroup === "Students" && groupAmount >= 30){
        totalPrice = totalPrice - (totalPrice * 0.15);
    }
    if(typeGroup === "Business" && groupAmount >= 100){
        groupAmount -= 10;
        totalPrice = groupAmount * price;
    }
    if(typeGroup === "Regular" && groupAmount >= 10 && groupAmount <= 20){
        totalPrice = totalPrice - (totalPrice * 0.05);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
    );