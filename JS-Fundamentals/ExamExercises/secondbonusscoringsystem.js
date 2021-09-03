function calcSystem(input){
    let students= Number(input.shift());
    let lectures= Number(input.shift());
    let initBonus = Number(input.shift());
    let maxBonus=0;
    let maxLections = 0;
    for (let i=0; i<students; i++){
        let atendances = Number(input[i]);
        let bonus = atendances / lectures * (5+ initBonus);
        if (maxBonus < bonus){
            maxBonus = bonus;
        }
      if (atendances > maxLections){
          maxLections = atendances
      }
    }
    console.log(`Max Bonus: ${(Math.ceil(maxBonus))}.`)
    console.log(`The student has attended ${maxLections} lectures.`)
    }
  solve([
    "10",
    "30",
    "14",
    "8",
    "23",
    "27",
    "28",
    "15",
    "17",
    "25",
    "26",
    "5",
    "18",
  ]);