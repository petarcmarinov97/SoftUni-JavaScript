function solve(arr) {

    arr.sort((a,b)=>a-b);

    let newArr = [];

    while(arr!=0){
        newArr.push(arr.shift());
        newArr.push(arr.pop())
    }
    
    
    return newArr;
    
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));