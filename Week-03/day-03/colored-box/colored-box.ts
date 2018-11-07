
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.


function drawColoredBox(width:number,height:number,) {
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(width,height);
    ctx.lineTo(width+100,height)
    ctx.stroke();

    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(width,height);
    ctx.lineTo(width,height+100)
    ctx.stroke();

    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(width,height+100);
    ctx.lineTo(width+100,height+100)
    ctx.stroke();

    ctx.strokeStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(width+100,height);
    ctx.lineTo(width+100,height+100)
    ctx.stroke();
    
}

drawColoredBox(100,100);