'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.

let x: number = canvas.width;
let y: number = canvas.height;

function drawDiagonal() {
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(x-x,y-y);
    ctx.lineTo(x,y);
    ctx.stroke();
    
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x,y-y);
    ctx.lineTo(x-x,y);
    ctx.stroke();
}

drawDiagonal();