function solve (input){
    let failsAllowed = Number(input.shift());
    let taskName = input.shift();
    let grade = Number(input.shift());
    let gradeSum = 0;
    let fails = 0;
    let flag = false;
    let taskCount = 0;
    let lastTask = "";

    while (flag == false){
        if (grade <= 4){
            fails++;
        }
        if (fails == failsAllowed){
            console.log(`You need a break, ${fails} poor grades.`);
            break;
        }
        taskCount++;
        gradeSum += grade;
        lastTask = taskName;
        taskName = input.shift();
        grade = Number(input.shift());
        
        if (taskName == "Enough"){
            flag = true;
            let average = gradeSum/taskCount;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${taskCount}`);
            console.log(`Last problem: ${lastTask}`);
        }
    }
}