function cycle(arg) {
    let num=""+ arg;
    let result=0;

    for(let i=0;i<num.length;i++){
        let n=Number(num[i]);
        result+=n;
    }
    console.log(`The sum of the digits is:${result}`);
}

cycle("1234");