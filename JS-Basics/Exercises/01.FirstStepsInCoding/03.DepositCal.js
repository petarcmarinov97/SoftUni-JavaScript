function lihva(first,second,third){
    let depozirana=Number(first);
    let sroknadeposit=Number(second);
    let procent=Number(third);
    let sum=depozirana + sroknadeposit*((depozirana*procent/100)/12);
    console.log(sum);
}

lihva('100','5','5')