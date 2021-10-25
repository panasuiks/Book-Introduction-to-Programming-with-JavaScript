function capLetter(inp) {
  if (typeof (inp) !== 'string') {
    console.log('Please enter string');
    return
  }
  if (inp.length > 10) {
    console.log(inp.toLocaleUpperCase());
    return inp.toLocaleUpperCase();
  } else {
    console.log(inp);
    return inp;
  }
}

let rlSync = require('readline-sync');

while (2 > 1) {
  let entry = rlSync.question('Enter some words ');
  capLetter(entry);
}