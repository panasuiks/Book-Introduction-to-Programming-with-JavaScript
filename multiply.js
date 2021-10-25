let rlsync = require('readline-sync');
number1 = getNumber('Enter the first number: ');
number2 = getNumber('Enter the second number: ');
function getNumber(prompt)  {
  return rlsync.question(`${prompt} `)
}

let  multiplier = (num1, num2) => {
  return num1 * num2
}
console.log(`${number1} * ${number2} = ${multiplier(number1, number2)}`);

