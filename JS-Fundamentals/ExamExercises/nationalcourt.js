function solve([emp1, emp2, emp3, pplCount]) {

    let pplServed = pplCount;
    let br= 0;
    let sumHours=emp1+emp2+emp3;
  
    while (pplServed > 0) {
      br++;
  
      if (br % 4 === 0) {
        continue;
      }
  
      pplServed -= sumHours;
  
    }
    console.log(`Time needed: ${br}h.`);
  
  }
solve([1,
    2,
    3,
    45
])