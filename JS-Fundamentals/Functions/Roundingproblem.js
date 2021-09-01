function rounding(num,precision){
    let fixedalready="";
    if (precision>=0 && precision<16){
        fixedalready=num.toFixed(precision);
    }else {
        fixedalready=num.toFixed(15);
    }
    console.log(parseFloat(fixedalready));
}
rounding(10.5,10)