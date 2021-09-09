function odd(arr){

    let oddF=x=>x%2==1;
    let maxN=function(a,b){
        return a-b;
    }
    let newArr=[]
    for (let i=0;i<arr.length;i++) {
        if(oddF(i)){
            newArr.push(arr[i]*2)
        }
    }
    console.log(newArr.reverse().join(` `))

}
odd([3, 0, 10, 4, 7, 3])