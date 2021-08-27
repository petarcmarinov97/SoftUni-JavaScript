function journey(arg1,arg2){
    let budget=Number(arg1);
    let season=arg2;
    let price=0;
    if(budget<=100){
        if(season=="summer"){
            price=budget*0.3;
        console.log("Somewhere in Bulgaria");
        console.log(`Camp - ${(price).toFixed(2)}`);
    }else if(season=="winter"){
        price=budget*0.7;
        console.log("Somewhere in Bulgaria");
        console.log(`Hotel - ${(price).toFixed(2)}`);
    }   
    }else if(budget<=1000){
        if(season=="summer"){
            price=budget*0.4;
        console.log("Somewhere in Balkans");
        console.log(`Camp - ${(price).toFixed(2)}`);
        }else if (season=="winter"){
            price=budget*0.8;
        console.log("Somewhere in Balkans");
        console.log(`Hotel - ${(price).toFixed(2)}`);
        }
    }else if (budget>1000){
        price=budget*0.9;
        console.log("Somewhere in Europe");
        console.log(`Hotel - ${(price).toFixed(2)}`);
    }

}