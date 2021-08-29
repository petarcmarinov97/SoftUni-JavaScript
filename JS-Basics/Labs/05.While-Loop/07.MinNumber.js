function minnumber(input){
    let n=Number(input[0]);
    let i=1;
    let min=Number.MAX_SAFE_INTEGER;

    while(n!=="Stop"){
        let chislo=Number(n);
        if(chislo<min){
            min=chislo;
        }
        n=input[i];
        i++;
    }
    console.log(min);
}