function solve(input) {
    let count = 0;
    
    for (let row in input) {
      row = Number(row);

      for (let col in input[row]) {
        col = Number(col);
        if (row + 1 < input.length) {
          if (input[row][col] == input[row + 1][col]) {
            count++;
          }
        }
        if (col + 1 < input[row].length) {
          if (input[row][col] == input[row][col + 1]) {
            count++;
          }
        }
      }
    }
    return count;
  }
console.log(solve([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]))