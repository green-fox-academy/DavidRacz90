// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

export { };

const fs = require('fs');

function copyFile(sourceFile: string, destinationFile: string): boolean {
    let isCopied: boolean;
    try {
        fs.copyFileSync(sourceFile, destinationFile);
        isCopied = true;
    } catch (e) {
        isCopied = false;
    }
    return isCopied;
}

console.log(copyFile('1.txt', '3.txt'));