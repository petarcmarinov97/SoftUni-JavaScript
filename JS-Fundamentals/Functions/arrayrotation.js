function solve(arr1,count){

    for(let i=0;i<count;i++){
        //създаваме променлива която ще ни запазва стойноста от масива и със функцията шифт я изтрива от него
        let element=arr1.shift()
        //вкарваме стойноста която е запазена в променливата element на последно място
        arr1.push(element)
    }
    console.log(arr1.join(` `));

}solve([51, 47, 32, 61, 21], 2)