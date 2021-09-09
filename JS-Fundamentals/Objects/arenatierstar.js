function arena(input) {
    let arena = {};
    for (let line of input) {
      if (line === "Ave Cesar") {
        break;
      }
      if (!line.includes("vs")) {
        let [gladiator, skill, points] = line.split(" -> ");
        if (!arena.hasOwnProperty(gladiator)) {
          arena[gladiator] = {};
        }
        if (arena[gladiator].hasOwnProperty(skill)) {
          if (arena[gladiator][skill] < Number(points)) {
            arena[gladiator][skill] = Number(points);
          }
        } else {
          arena[gladiator][skill] = Number(points);
        }
      } else {
        let [gladiatorOne, gladiatorTwo] = line.split(" vs ");
        if (
          arena.hasOwnProperty(gladiatorOne) &&
          arena.hasOwnProperty(gladiatorTwo)
        ) {
          let gladiatOnetehniques = arena[gladiatorOne];
          let gladiatTwotehniques = arena[gladiatorTwo];
          let killed = false;
          if (killed) {
            break;
          }
          for (let key of Object.keys(gladiatOnetehniques)) {
            if (killed) {
              break;
            }
            if (gladiatTwotehniques.hasOwnProperty(key)) {
              if (gladiatTwotehniques[key] > gladiatOnetehniques[key]) {
                delete arena[gladiatorOne];
                killed = true;
                break;
              } else {
                delete arena[gladiatorTwo];
                killed = true;
                break;
              }
            }
          }
        }
      }
    }
    let ordered = {};
    Object.keys(arena).forEach((glad) => {
      ordered[glad] = [];
      ordered[glad].push(getPoints(glad));
    });
    Object.entries(ordered)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .forEach((el) => {
        console.log(`${el[0]}: ${el[1]} skill`);
        Object.entries(arena[el[0]])
          .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
          .forEach((kvp) => {
            console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
          });
      });
   
    function getPoints(glad) {
      let sum = 0;
      Object.entries(arena[glad]).forEach((el) => {
        sum += el[1];
      });
      return sum;
    }
  }
solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])