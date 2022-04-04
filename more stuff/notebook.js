/*let x = Math.sqrt(37);

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));
*/
let list1 = '1, 6, 3, 2';
let list2 = '-1, -6, -3, -2';
let list3 = '2, 2';

let list1a = list1.split(', ');
let list2a = list2.split(', ');
let list3a = list3.split(', ');

let listArray = [list1a, list2a, list3a]
let maxArray = []

for (value in listArray) {
  //console.log(value)
  maxArray[value] = Number.NEGATIVE_INFINITY;
  for (value2 of listArray[value]) {
    //console.log(value2 + '  ' + maxArray[value] + '   outside loop');
    if (parseFloat(value2) > maxArray[value]) {
      //console.log(value2 + '  ' + maxArray[value] + '   inside loop');
      maxArray[value] = parseFloat(value2);
      //console.log(value2 + '  ' + maxArray[value] + '   inside loop after change' )
    }
  }
}

console.log(maxArray[0] + ', ' + maxArray[1] + ', ' + maxArray[2]);
console.log(typeof maxArray[0] + ', ' + typeof maxArray[1] + ', ' + typeof maxArray[2]);

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(inpArray, regex) {
  let outputArray = []
  for (index in inpArray) {
    /*if (inpArray[index].match(regex)) {
      
    }*/
    if (regex.test(inpArray[index])) {
      outputArray.push(inpArray[index]);
    }
  }
  return outputArray
}

console.log(allMatches(words, /lab/));

function isNotANumber(inpValue) {
  console.log(typeof inpValue + '   ' + inpValue)
  if (typeof inpValue === 'number') {
    if ((inpValue <= Infinity) || (inpValue >= Infinity)) {
      return false
  } else {
    return true
  }
 } else {
  return false
}
}

/*function isNotANumber(inpValue) {
  return inpValue !== inpValue;
}*/

let x = 'test'
console.log(isNotANumber(x));

function isNegZero(inpValue) {
  return (1/inpValue === -Infinity) ? true: false
}

let rlsync = require('readline-sync');
do {
let userInput = rlsync.questionFloat('What number do you want to test? ');
console.log(isNegZero(userInput));
} while (2>1)



