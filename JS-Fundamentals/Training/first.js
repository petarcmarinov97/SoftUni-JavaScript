function solve(emp1,emp2,emp3,count){

let peopleServed=count;
let br=0;
let sumHours=emp1+emp2+emp3;

while(peopleServed>0){
    br++;
    if(br%4===0){
        continue
    }
    peopleServed-=sumHours;
}
console.log(`Time needed: ${br} h`)

}solve(1,2,3,45)