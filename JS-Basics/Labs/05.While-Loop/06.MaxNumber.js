function maxnumber(input){
    let chislo=Number(input[0]);
    let i=1;
    let max=Number.MIN_SAFE_INTEGER;
    while(chislo!=="Stop"){
        let num=Number(chislo);
        if(num>max){
            max=num;
        }
        chislo=input[i];
        i++;
    }
    console.log(max);
}