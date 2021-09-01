function solve(n){
//Привеждаме числото към низ
let numstring=n.toString();

let sum=0;

for(let i=0;i<numstring.length;i++){
    sum+=Number(numstring[i]);
    console.log(numstring[i]);
}
console.log(sum)

}
solve(411);