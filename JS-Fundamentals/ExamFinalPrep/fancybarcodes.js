
    function solve(input) {
        let numberOfbarcode = Number(input.shift());
      
        let pattern = /(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,})(?<end>[A-Z]@#+)/;
        let code = "";
      
        for (const line of input) {
          match = pattern.exec(line);
      
          if (match) {
            let digitPattern = /\d/g;
            code = line.match(digitPattern);
            code === null
              ? console.log(`Product group: 00`)
              : console.log(`Product group: ${code.join("")}`);
          } else {
            console.log(`Invalid barcode`);
          }
        }
      }

solve([`3`,
    `@#FreshFisH@#`,
    `@###Brea0D@###`,
    `@##Che4s6E@##`
    ])