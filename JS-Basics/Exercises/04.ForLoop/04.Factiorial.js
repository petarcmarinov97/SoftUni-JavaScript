function factoriel(arg1){
    let num=Number(arg1);
    let fac=1;
    for(let i=1;i<=arg1;i++){
        fac=fac*i;
    }
    console.log(fac);
}

factoriel("4")