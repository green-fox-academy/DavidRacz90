'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

for(let i: number = 0; i < 3; i++) {
    drawLine(100,100,i);
}

function drawLine(width: number,height: number,  i) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width+50*i, height+50*i);
    ctx.lineTo(canvas.width/2, canvas.height/2);
    ctx.stroke();
}