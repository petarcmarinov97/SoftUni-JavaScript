function solve(input) {

    //Сортиране 
    function customSort(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else
            return 0;
    }


    //Броя на студентите
    let countStudents = Number(input.shift());
    
    //Броя на лекциите в курса
    let countLectures = Number(input.shift());

    //Допълнителен бонус към курса
    let addBonus = Number(input.shift());

    //Броя на явявания на студентите
    let attCount = input.slice(0,input.length)

    //Максимален бонус изчисление
    function maxBonus(attCount) {
        let arrBonus = [];
        for (let i = 0; i < countStudents; i++) {
            let maxBonus = 0
            maxBonus = (attCount[i] / countLectures) * (5 + addBonus);
            maxBonus = Math.ceil(maxBonus)
            arrBonus.push(maxBonus)
        }
        let copy = arrBonus.sort(customSort);
        let max=copy.pop();
        return max;
    }
    //Извличане на студента със най много участия
    let compareFunction=function(a,b){
        return a-b;
    }
    attCount.sort(compareFunction)
    maximum=attCount.pop()
    //Изпечатване на крайни резултати
    console.log(`Max Bonus: ${maxBonus(input)}.`)
    console.log(`The student has attended ${maximum} lectures.`)

}
solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  
  )