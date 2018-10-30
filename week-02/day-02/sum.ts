// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(until: number) :number {
    let sumOfNumbers: number = 0;
    for(let i: number = 0; i <= until; i++){
        
        sumOfNumbers += i;
        
        
        
    }
    return sumOfNumbers;
}

console.log(sum(5));