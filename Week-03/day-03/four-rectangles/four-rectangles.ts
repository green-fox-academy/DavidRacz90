'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

for (let i: number = 0; i < 4; i++) {
    drawRectangles(0, 0, 60, 60, i)
}


function drawRectangles(x: number, y: number, width: number, height: number, i) {
    ctx.fillStyle = 'rgb(0,' + 255/10*i+',0)';
    ctx.fillRect(x+60*i, y+60*i, width + i * 10, height + i * 10);
    
}

