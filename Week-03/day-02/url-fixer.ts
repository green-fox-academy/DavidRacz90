'use strict';
export{};
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';



let changeWord = /bots/gi;
let insertChar = /https/gi;


let correctUrl = url.replace(changeWord, "odds",).replace(insertChar, 'https:'); 


console.log(correctUrl);