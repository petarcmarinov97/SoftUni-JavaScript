function solve(arr){

let sorted=arr.sort()

for(let i=0;i<arr.length;i++){
    console.log(`${i+1}.${arr[i]}`)
}

}
solve(["Potatoes", "Tomatoes", "Onions", "Apples"])