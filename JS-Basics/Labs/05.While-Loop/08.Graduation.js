function solve (input){
    let student = input.shift();
    let grade = Number(input.shift());
    let average = 0;
    let sum = 0;
    let count = 1;
    let count2 = 1;
    let classN = 1;
    
    while (count <=12){
        
        if(grade < 4){
            grade = Number(input.shift());
            count2++; 

            continue;
        }
        if (count2 >1) {
            console.log(`${student} has been excluded at ${classN} grade`);
            break;
        }

        sum += grade;
        grade = Number(input.shift());  
        count++;
        classN++;
              
    }

    if (classN >= 12){
        average = (sum/12).toFixed(2);
        console.log(`${student} graduated. Average grade: ${average}`)
    }
    
}