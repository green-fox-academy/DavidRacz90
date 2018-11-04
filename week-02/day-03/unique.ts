//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

//jön egy tömb "in" tele számokkal
//létrehozunk egy új tömböt "out"
//végig megyünk az "in" tömbbön elkérjük az elemét
    //ha az elem létezik az "out" tömbben akkor megyünk tovább
        //hogyan nézzük meg, hogy létezik-e
    //egyébként belerakjuk

let inArray: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

let outArray: number[] = distinct(inArray);

console.log(outArray);

function distinct(inArray: number[]):number[] {
    let result: number[] = [];
    for(let i: number = 0; i < inArray.length; i++) {
        let element: number = inArray[i];
        if (!isElementExistsInArray(element, result)) {
            result.push(element);
        }
    }
    return result; 
}

function isElementExistsInArray(n:number, arr:number[]):boolean {
    for(let j: number = 0; j < arr.length; j++) {
        if(n === arr[j]) {
            return true;
        }
    }
    return false
}