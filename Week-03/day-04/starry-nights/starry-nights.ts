'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)


function nightSky(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    for(let i = 0; i < 100; i++){
        i*Math.random();
        let color =  Math.random() *(220-105)+105;
        ctx.fillStyle = 'rgb(' + color + ',' + color +',' + color + ')';
        ctx.fillRect(Math.random()*600,Math.random()*400, 4,4)
    }
}

nightSky();