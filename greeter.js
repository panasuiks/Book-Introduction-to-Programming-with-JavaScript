let rlsync = require('readline-sync');
let firstName = rlsync.question('What is your first name?\n');
let lastName = rlsync.question('What is your last name?\n');
console.log(`Hello ${firstName} ${lastName}!`);
