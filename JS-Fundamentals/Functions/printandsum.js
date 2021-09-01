function printandsum(arg1,arg2){
    let start=Number(arg1)
    let end=Number(arg2);
    let space=``
    let br=0;
    for(let i=start;i<=arg2;i++){
        space+=i + ` `;
        br+=i;
    }
    console.log(`${space}`);
    console.log(`Sum: ${br}`);
}
printandsum(5,10)