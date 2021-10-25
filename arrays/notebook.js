/*let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0
];
let mapped = myArray.map(num => (num % 2 === 0 ? 'even' : 'odd'))
console.log(myArray);
console.log(mapped);

let findIntegers = array => {
  return array.filter(num => Number.isInteger(num))
}

let a = [1, 2, 2.5, '10', 'hello', -2];
console.log(findIntegers(a));

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr => {
  let lengths = arr.map(inp => inp.length)
  return results = lengths.filter(inp => inp % 2 !== 0)

}

let lengths = oddLengths(arr);
console.log(lengths);

let array1 = [3, 5, 7];
const sumOfSquares = inp => {
  console.log(inp.reduce((adder, element) => adder + element * element, 0))
}

sumOfSquares(array1);

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = arr => {
  return arr.reduce((accumulator, element) => {
    console.log('step 1' + '   ' + typeof (accumulator) + '  ' + accumulator)
    if (element.length % 2 !== 0) {
      console.log(element.length)
      console.log('step 2' + '   ' + typeof (accumulator) + '  ' + accumulator)
      accumulator.push(element.length);
      console.log('step 3' + '   ' + typeof (accumulator) + '  ' + accumulator)
    }
    return accumulator
    console.log('final step' + typeof (accumulator))
  }, [])
}
console.log(oddLengths(arr));


let numbers1 = [1, 3, 5, 6, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function does3Exist(inp) {
  return inp.some((element) => element === 3)
}

console.log(does3Exist(numbers1));
console.log(does3Exist(numbers2));
console.log(does3Exist(numbers3));
*/

let arr = [
  ['hello', 'world'], ['example', 'mem', null, 6, 88], [4, 8, 12]
]
arr[1][3] = 606;
console.log(arr);
