let rlSync = require('readline-sync');

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Please enter integer')
    return
  } 
  num % 2 === 0 ? console.log('even') : console.log('odd')
}

while (2>1) {
    let number1 = Number.parseFloat(rlSync.question('Enter the number '));
    evenOrOdd(number1);
}

