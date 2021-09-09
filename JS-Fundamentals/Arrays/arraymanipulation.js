function solve(input){
//Извличане на низа с числа като нов масив. Със shift() взимаме първия елемент
let numbers=input
.shift()
.split(` `) //имаме string и за да превърнем в масив използваме split

for(let line of input){
    let [command,firstArg,secondArg]=line.split(` `);//Извличаме си командата и номера от дадения ред

    if(command===`Add`){
        numbers.push(firstArg);
    }else if(command===`Remove`){
        let index=numbers.indexOf(firstArg);

        if(index!==-1){
            numbers.splice(index,1);
            }
        }else if(command===`RemoveAt`){
            let index=Number(firstArg);

            numbers.splice(index,1)
        }else{
            let index=Number(secondArg);

            numbers.splice(index,0,firstArg);
        }
    }
    return numbers.map(Number).join(` `);
}

console.log(solve(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']))