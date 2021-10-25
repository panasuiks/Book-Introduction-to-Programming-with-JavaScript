let rlsync = require('readline-sync');
let age = rlsync.questionFloat('What is your age? ');

for(let i = 0;i<50;i=i+10){
  if(i===0) {
    console.log(`You are ${age} years old!`)
  } else {
    console.log(`In ${i} years you will be ${age + i} years old!`)
  }
}

