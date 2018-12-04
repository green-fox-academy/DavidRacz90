
'use strict'

const fs = require('fs')

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'UTF-8')
  } catch (e) {
    console.log(e.message)
    return null;
  }
}

function checkNumbers(fileName: string) {
  const fileContent = readFromFile(fileName);
  if (fileContent !== null) {
    let lines = fileContent.split('\r\n');
    let lotteryNumbers: string[][] = [];
    let theFiveMostCommonNumbers = {};
    for (let i: number = 0; i < lines.length; i++) {
      lotteryNumbers.push(lines[i].split(';').splice(-5, 5));
    }
    for (let i: number = 0; i < lotteryNumbers.length; i++) {
      for (let j: number = 0; j < lotteryNumbers[i].length; j++) {
        if (theFiveMostCommonNumbers[lotteryNumbers[i][j]]) {
          theFiveMostCommonNumbers[lotteryNumbers[i][j]]++;
        } else {
          theFiveMostCommonNumbers[lotteryNumbers[i][j]] = 1;
        }
      }
    }
    return Object.keys(theFiveMostCommonNumbers).sort((a, b) =>
      theFiveMostCommonNumbers[b] - theFiveMostCommonNumbers[a]).splice(0, 5)

  }
}

console.log(checkNumbers('lottery.csv'));
