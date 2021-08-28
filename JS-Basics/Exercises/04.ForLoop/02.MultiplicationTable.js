function numbers(arg){
    let num=Number(arg);
    for(let i=1;i<=10;i++){
            console.log(`${i} * ${num} = ${i*num}`);
        }
}

numbers("5")