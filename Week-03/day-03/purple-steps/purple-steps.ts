'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]


let purpleSquare: number = 17;


for (let i: number = 0; i < purpleSquare; i++) {
    drawPurpleSquare(10)
}

function drawPurpleSquare(size) {
    ctx.fillStyle = "purple";
    ctx.fillRect(size*i, size*i, size, size);
}