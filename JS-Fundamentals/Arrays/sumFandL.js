function sum(arr){

let fist=[]
let last=[]
first=arr.shift()
last=arr.pop()
firstnumber=Number(first)
lastnumber=Number(last)
console.log(firstnumber+lastnumber)
}
sum(['20', '30', '40'])