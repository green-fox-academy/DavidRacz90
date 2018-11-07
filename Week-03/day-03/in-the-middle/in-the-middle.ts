'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

let x:number = canvas.width;
let y:number = canvas.height;

function drawHorizontal() {
    ctx.beginPath();
    ctx.moveTo(x-x, y/2,);
    ctx.lineTo(x,y/2);
    ctx.strokeStyle = 'red';
    ctx.stroke();
}

function drawVertical() {
    ctx.beginPath();
    ctx.moveTo(x/2, y-y,);
    ctx.lineTo(x/2,y);
    ctx.strokeStyle = 'green';
    ctx.stroke();
}

drawHorizontal();
drawVertical();