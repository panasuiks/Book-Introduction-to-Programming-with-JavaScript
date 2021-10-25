let rlSync = require('readline-sync');
let number1 = rlSync.question('Enter the first number\n');
let number2 = rlSync.question('Enter the second number\n');
let sum = parseFloat(number1) + parseFloat(number2)
console.log(`The numbers ${number1} + ${number2} is ${sum}`);
