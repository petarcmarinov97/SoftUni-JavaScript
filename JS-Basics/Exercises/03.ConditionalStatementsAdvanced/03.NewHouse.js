function newhome(flower,count,budget){
    let flowerType=flower;
    let flowersCount=Number(count);
    let ourBudget=Number(budget);

    let rosesPrice=5.0;
    let dahliasPrice=3.8;
    let tulipsPrice=2.8;
    let narcissusPrice=3;
    let GladiolusPrice=2.5;

    let currentPrice=0;

    switch(flowerType){
        case 'Roses':
            currentPrice+=(flowersCount*rosesPrice);
            if(flowersCount>80){
                currentPrice=currentPrice*0.9;
            }
            break;
        case 'Dahlias': 
            currentPrice+=(flowersCount*dahliasPrice);
            if(flowersCount>90){
                currentPrice=currentPrice*0.85;
            }
            break;
        case 'Tulips':
            currentPrice+=(flowersCount*tulipsPrice);
            if(flowersCount>80){
                currentPrice=currentPrice*0.85;
            }
            break;
        case 'Narcissus':
            currentPrice+=(flowersCount*narcissusPrice);
            if(flowersCount<120){
                currentPrice=currentPrice*1.15;
            }
            break;
        case 'Gladiolus':
            currentPrice+=(flowersCount*GladiolusPrice);
            if(flowersCount<80){
                currentPrice=currentPrice*1.20;
            }
            break;
    }
    if(currentPrice>ourBudget){
        console.log(`Not enough money, you need ${(currentPrice-ourBudget).toFixed(2)} leva more.`);
    }else{
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowerType} and ${(ourBudget-currentPrice).toFixed(2)} leva left.`);
    }
}