import { log } from "util";

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

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

function listIP() {
    const content = readFromFile('log.txt');
    let logFile: string[] = content.split('\r\n');
    let ipAdresses = [...new Set(logFile)];
    console.log(ipAdresses);
}


function ratio(): number {
    let gets: number = 0;
    let posts: number = 0;
    const content = readFromFile('log.txt').split('\r\n');
    content.forEach(e => {
        if (e.includes('GET')) {
            gets++;
        } else if (e.includes('POST')) {
            posts++;
        }
    });
    return Math.round((gets / posts)*100)/100;

}

listIP();
console.log(ratio());