'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.





function drawChessLineEven(height, size) {
    for (let i: number = 0; i < canvas.width / size; i++) {
        if (i % 2 === 0) {
            ctx.fillStyle = 'black';
            ctx.fillRect(size * i, height, size, size);
        } else {
            ctx.strokeRect(size * i, size, size, size)
        }
    }
}

function drawChessLineOdd(height, size) {
    for (let i: number = 0; i < canvas.width / size; i++) {
        if (i % 2 === 1) {
            ctx.fillStyle = 'black';
            ctx.fillRect(size * i, height, size, size);
        } else {
            ctx.strokeRect(size * i, height, size, size)
        }
    }
}


let rowCounter = 8;

for (let j = 0; j < rowCounter; j++) {
    if (j % 2 === 0) {
        drawChessLineEven(j * 50, 50)
    } else {
        drawChessLineOdd(j * 50, 50)
    }

}




