function solve (input){
    let jury = Number(input.shift());
    let presentation = input.shift();
    let final = 0;
    let countPres = 0;

    while (presentation != "Finish"){
        let sumGrades = 0;
        for(let i = 0; i < jury; i++) {
            let grade = Number(input.shift());
            sumGrades += grade;
        }
        let average = 0;
        average = sumGrades/jury;
        console.log(`${presentation} - ${average.toFixed(2)}.`);
        final += average;
        countPres++;
        presentation = input.shift();
    }
    console.log(`Student's final assessment is ${(final/countPres).toFixed(2)}.`)
}