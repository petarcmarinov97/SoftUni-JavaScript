function valve(number){
    let br1=0;
    let n=Number(number);
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            for(let h=0;h<=n;h++){
                if(i+j+h==n){
                    br1++;
                }
            }
        }
    }console.log(br1);
}