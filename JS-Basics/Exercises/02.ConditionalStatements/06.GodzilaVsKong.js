function cinema(budjet,broistatisti,cenanaobleklonaedinstatist){
    budjet1=Number(budjet);
    broistatisti1=Number(broistatisti);
    cenanaobleklonaedinstatist1=Number(cenanaobleklonaedinstatist);
    let dekor=budjet1*0.1;
    let cenazaobleklo=broistatisti1*cenanaobleklonaedinstatist1;
    if(broistatisti1>150){
        cenazaobleklo=cenazaobleklo*0.9;
        }
    let total=cenazaobleklo+dekor;
    if(total>budjet1){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total-budjet1).toFixed(2)} leva more.`)
    }else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budjet1-total).toFixed(2)} leva left.`);
    }
}