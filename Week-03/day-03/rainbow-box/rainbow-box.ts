'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let color:string [] = ['violet', 'indigo', 'blue','green','yellow', 'orange','red']
let square: number = 7;

for(let i: number = 0; i < square; i++) {
  rainbow(320-i*35,color[i] )
}

function rainbow(size: number, color) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width/2)-(size/2), (canvas.height/2)-(size/2), size, size);
}
