function solve(input) {

    let arr = input.split(` `).map(Number);

    //Метод за средно ар.
    const avarege = arr.reduce((acc, value) => acc += value, 0) / arr.length;

    let newArr=arr.filter(element=>element>avarege).sort((a,b)=>b-a);
    if(newArr.length==0){
        console.log(`No`)
    }else{
    console.log(newArr.slice(0,5).join(` `))
    }

}
solve('5 2 3 4 -10 30 40 50 20 50 60 60 51')