// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(until: number):number{
    let factorial:number = 1;
    for(let i: number = 2; i <= until; i++){
        factorial = factorial * i;
        
    }
    return factorial;
}

console.log(factorio(6));