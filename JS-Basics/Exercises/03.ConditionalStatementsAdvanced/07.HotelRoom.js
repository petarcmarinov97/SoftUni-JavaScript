function hotelRoom(arg1,arg2){
    let month=arg1;
    let nights=Number(arg2);
    let priceStudio=0;
    let priceApartment=0;

    if(month=="May" || month=="October"){
        if(nights>7 && nights<=14){
            priceStudio=(nights*50)*0.95;
            priceApartment=nights*65;
        }else if(nights>14){
            priceStudio=(nights*50)*0.7;
            priceApartment=(nights*65)*0.9;
        }else{
            priceStudio=(nights*50);
            priceApartment=nights*65;
        }
    }else if(month=="June" || month=="September"){
        if(nights>14){
        priceStudio=(nights*75.2)*0.8;
        priceApartment=(nights*68.7)*0.9;
    }else{
        priceStudio=nights*75.2;
        priceApartment=nights*68.7;
}
    }else if(month=="July" || month=="August"){
        if(nights>14){
        priceStudio=nights*76;
        priceApartment=(nights*77)*0.9;
    }else{
        priceStudio=nights*76;
        priceApartment=nights*77;
}
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}