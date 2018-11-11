'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function lineDrawing(number: number) {
    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(canvas.width, canvas.height-number);
    ctx.lineTo(canvas.width-number, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(canvas.width-number, canvas.height);
    ctx.lineTo(0, canvas.height-number);
    ctx.stroke();
}
    for(let i: number = 0; i < 20; i++) {
        lineDrawing (i * 20);
    }
