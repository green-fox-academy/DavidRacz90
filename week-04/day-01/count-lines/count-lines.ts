// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
export { };
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, 'utf-8');
    } catch (e) {
        console.log(e.message);
        return null;
    }
}


function Countlines(): number {
    let count: number = 0;
    const fileContent = readFromFile('my-text.txt');
    if (fileContent !== null) {
        fileContent.split('\r\n').forEach(e => {
            {
                count+= 1;
            }
        })
        return count;
    }
}

console.log(Countlines());
