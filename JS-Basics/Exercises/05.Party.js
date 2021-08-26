function bd(naem){
    naem=Number(naem);
    let torta=naem*(20/100);
    let napitki=torta-(torta*(45/100));
    let animator=naem/3;
    let sum=torta+napitki+animator+naem;
    console.log(sum);
}

bd('150')