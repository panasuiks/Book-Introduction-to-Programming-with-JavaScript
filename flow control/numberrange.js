function numberRange(inp) {
  if (inp < 0) {
    console.log(`${inp} is less than 0`)
  } else if (inp <= 50) {
    console.log(inp + ' is between 0 and 50');
  } else if (inp <= 100) {
    console.log(`${inp} is between 51 and 100`);
  } else if (inp > 100) {
    console.log(inp + ' is greater than 100');
  } else {
    console.log('Error encountered. Please retry.')
  }
}
  
let rlSync = require('readline-sync');


while (2 > 1) {
  let entry = parseFloat(rlSync.question('Enter a number: '));
  numberRange(entry);
}
