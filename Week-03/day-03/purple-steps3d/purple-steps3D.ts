'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]


let purpleSquare3D: number = 5;

for(let i: number = 0; i < purpleSquare3D; i++) {
    drawPurpleSquares(10*2**i)
}

function drawPurpleSquares(size){
    ctx.fillStyle = 'purple';
    ctx.fillRect(size, size, size, size);
}
