function valve(arr){

//пресмятане на начална сума
let sumnachalna=0
for(let i=0;i<arr.length;i++){
    sumnachalna+=arr[i]
}

//проверка за чертни и нечетни
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[i]+=i;
        }else{
            arr[i]-=i;
        }
    }

//пресмятане на крайна сума
let sumakraina=0;
for(let i=0;i<arr.length;i++){
    sumakraina+=arr[i];
}


//извеждане на новия масив и резултатите от сумите
console.log(arr);
console.log(sumnachalna);
console.log(sumakraina)
}
valve([-5, 11, 3, 0, 2])