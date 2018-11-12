// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8');
  } catch(e) {
    console.log(e.message);
    return null;
  }
}

function TicTacToe(fileName: string): string {
    const content  = fs.readFromFile(fileName);
    if (content === 'win-o.txt') {
        return 'O';
    } else if (content === 'win-x.txt'){
        return 'X';
    } else if (content === 'draw.txt') {
        return 'Draw';
    }
}

TicTacToe('win-o.txt');