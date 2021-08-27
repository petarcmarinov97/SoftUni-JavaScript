function pazar(cenaqgodi,bananikol,portokalikol,malinikol,qgodikol){
    cenaqgodi=Number(cenaqgodi);
    bananikol=Number(bananikol);
    portokalikol=Number(portokalikol);
    malinikol=Number(malinikol);
 
    //Цена на малините за кг=24
    let cenamalinizakg=Number;
    cenamalinizakg=cenaqgodi/2;
 
    //Цена на портокалите за кг=14.4
    let cenaportokalizakg=Number;
    cenaportokalizakg=cenamalinizakg-(0.4*cenamalinizakg);
 
 
    //Цена на бананите за кг=4.8
    let cenabananizakg=Number;
    cenabananizakg=cenamalinizakg-(0.8*cenamalinizakg);
 
    //Суми за крайната покупка
     let sum=Number;
     sum=(cenaqgodi*qgodikol)+(bananikol*cenabananizakg)+(malinikol*cenamalinizakg)+(portokalikol*cenaportokalizakg);
     console.log(sum);
 }

 pazar('2','5','3','3','4');