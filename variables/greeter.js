let rlsync = require('readline-sync');
function nameGet(prompt) {
  let returnName = rlsync.question(prompt + '\n');
  return returnName
}
let fullName = nameGet('Please enter your first name') + ' ' + nameGet('Please enter your last name');

console.log(`Hello, ${fullName}`);
