function solve(n, k) {
    let arr=[1];
    
    //Цикъл за добавяне на елементи
    for(let i=1;i<n;i++){
        let startIndex=Math.max(0,i-k);
        let takenElements=arr.slice(startIndex,i);
        let sum=0;
        //Цикъл за обхождане до к-ти елемент
        for(let j=0;j<takenElements.length;j++){
            sum+=takenElements[j];
        }
        arr[i]=sum;
    }
    return arr.join(` `);
} 
console.log(solve(6, 3));
