function solve(input){
    //Взимаме целия масив или клонираме
    let arr=input.slice()
    //Цикъл в който го обхождаме от ляво на дясно
    for(let i=0;i<arr.length;i++){
        let currentElement=arr[i];
    //Цикъв в който го обхождаме от дясно на ляво
        for(let j=arr.length-1;j>i;j--){
            let neededElement=arr[j]
            if(currentElement==neededElement){
            arr.splice(j,1)
            }
        }
    }
    console.log(arr.join(` `))
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])