function solve(arr,rotation) {

let newArr=[];

for(let i=0;i<rotation;i++){
    arr.unshift(arr[arr.length-1]);
    arr.pop()
    
}

console.log(arr.join(` `))
}
solve([`Banana`,`Orange`,`Coconut`,`Apple`],15)