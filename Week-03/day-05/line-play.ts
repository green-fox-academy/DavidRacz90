'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for(let i = 0; i < 14; i++){
    drawLines(75 +(canvas.width-75 / 14 *i), 0, canvas.width, (canvas.height-50 / 14 * i), 'purple')
}

function drawLines(xBegin: number, yBegin: number, x: number, y: number, color: string) {
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.moveTo(xBegin,yBegin)
    ctx.lineTo(x,y);
    ctx.stroke();
}