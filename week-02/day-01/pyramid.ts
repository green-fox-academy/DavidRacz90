"use strict";
export{}
let lineCount: number = 4;

for(let i=1; i<= lineCount; i++){
    let space = ' '.repeat(lineCount-i);
    let star = '*'.repeat(i*2 -1)
 
    console.log(space + star + space);
  } 