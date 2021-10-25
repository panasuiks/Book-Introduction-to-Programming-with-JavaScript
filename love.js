let rlsync = require('readline-sync');


function loveCheck(input) {
  let lowerInput = input.toLowerCase()
  if (lowerInput === '+ infinity' || input === 'plus infinity') {
    return ('That\'s damn right!');
  } else {
    return ('Nope! Try Again');
  }
}

for (i = ''; i !== 'That\'s damn right!';) {
  let userInput = rlsync.question('How much does  Steve love Christen? ');
  i = loveCheck(userInput);
  console.log(i)
}