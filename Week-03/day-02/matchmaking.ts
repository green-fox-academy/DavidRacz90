'use strict';
export { };
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(girls, boys) {
    let match: string[][] = [[girls], [boys]];
    for(let i: number = 0; i < girls.length; i++){
        console.log(girls[i]+ " " + boys[i]);
    }
    
    
}

makingMatches(girls, boys);
