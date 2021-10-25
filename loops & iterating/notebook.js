let rlsync = require('readline-sync');
let num = rlsync.questionFloat('What number do you want to test? ');
console.log(factorial(num));
function factorial(inp) {
  if (inp === 1) return inp
  return inp * factorial(inp - 1)
}


/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1,3);
  tries += 1;
} while (result <= 2)


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/