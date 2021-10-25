let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0
];
let mapped = myArray.map(num => (num % 2 === 0 ? 'even': 'odd'))
console.log(myArray);
console.log(mapped);

let findIntegers = array => {
  return array.filter(num => Number.isInteger(num))
}

let a = [1, 2, 2.5, '10', 'hello', -2];
console.log(findIntegers(a));