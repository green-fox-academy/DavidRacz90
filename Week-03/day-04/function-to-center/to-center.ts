'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

let height = 20;
let width = 30;
let lineCounter = 20
function toCenter (x,y) {
    
    
    for(let i = 0; i <= width; i++) {
        ctx.beginPath();
        ctx.moveTo(lineCounter*i, y);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for(let j = 0; j <= height; j++) {
        ctx.beginPath();
        ctx.moveTo(x, j*lineCounter);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
    for(let i = 0; i <= width; i++) {
        ctx.beginPath();
        ctx.moveTo(lineCounter*i, height*lineCounter);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }

    for(let j = 0; j <= height; j++) {
        ctx.beginPath();
        ctx.moveTo(width*lineCounter, j*lineCounter);
        ctx.lineTo(canvas.width/2, canvas.height/2);
        ctx.stroke();
    }
}

toCenter(0,0)