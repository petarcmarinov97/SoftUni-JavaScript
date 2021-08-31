function perfectNums(n){

    function sum(n){
    let sum=0;
    for(let i=1;i<n;i++){
        if(n%i==0){
            sum+=i
        }else{
            sum+=0
        }
    }
    return sum;
}
    if(n==sum(n)){
        console.log(`We have a perfect number!`)
    }else{
        console.log(`It's not so perfect.`)
    }

}perfectNums(6)