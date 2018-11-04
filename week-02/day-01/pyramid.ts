"use strict";
export { }

printPyramid(4)

function printPyramid(height){
  for (let i = 1; i <= height; i++) {
    printLine(height, i, i)
  }
}

function printLine(height, numberOfSpace, numberOfStar) {
  let space = ' '.repeat(height - numberOfSpace);
  let star = '*'.repeat(numberOfStar * 2 - 1)
  console.log(space + star + space);
}