'use strict';
export { };

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let lineCount: number = 14;

printDiamond(lineCount)

function printDiamond(lineCount) {
    let half = Math.round(lineCount / 2)

    printPyramid(0, half)

    if (isEven(lineCount)) {
        printReversePyramid(0, half);
    } else {
        printReversePyramid(1, half - 1);
    }
}

function isEven(n: number):boolean {
    return n % 2 === 0;
}

function printReversePyramid(offset: number, height: number) {
    for (let currentRow: number = height; currentRow >= 1; currentRow--) {
        buildPyramidRow(offset, height, currentRow);
    }
}

function printPyramid(offset: number, height: number) {
    for (let currentRow: number = 1; currentRow <= height; currentRow++) {
        buildPyramidRow(offset, height, currentRow);
    }
}

function buildPyramidRow(offset: number, height: number, currentRow: number) {
    printLine(offset + height - currentRow, currentRow * 2 - 1);
}

function printLine(numberOfSpaces: number, numberOfStars: number) {
    let spaces: string = " ";
    let stars: string = "*";
    console.log(spaces.repeat(numberOfSpaces) + stars.repeat(numberOfStars));
}