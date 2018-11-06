
// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away


'use strict';

let example: string = 'In a dishwasher far far away';

let changeWord  = /dishwasher/gi

let newExample = example.replace(changeWord, "galaxy")

console.log(newExample);

