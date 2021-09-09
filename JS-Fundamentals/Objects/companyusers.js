function solve(input) {
    let companies = {};
    for (const elem of input) {
      let [company, id] = elem.split(" -> ");
      if (!companies.hasOwnProperty(company)) {
        companies[company] = new Set();
      }
      companies[company].add(id);
    }
    let sorted = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
      console.log(elem[0]);
      for (let number of elem[1]) {
        console.log(`-- ${number}`);
      }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
    
    )