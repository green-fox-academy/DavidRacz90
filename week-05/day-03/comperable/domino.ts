 'use strict'
 
 class Domino implements Comparable{
   values: number[];
   constructor(valueA: number, valueB: number) {
     this.values = [valueA, valueB];
    }
    compareTo(other:Domino): number {
      return this.values[0] - other.values[0]
    }
  }
  
  
  
  interface Comparable {
    compareTo(other: Comparable): number;
  }
  
function initalizeDomino(): Domino[] {
let dominoes = [];
dominoes.push(new Domino(5, 2));
dominoes.push(new Domino(4, 6));
dominoes.push(new Domino(1, 5));
dominoes.push(new Domino(6, 7));
dominoes.push(new Domino(2, 4));
dominoes.push(new Domino(7, 1));
  return dominoes;
}


function print(dominoes: Domino[]) {
  dominoes.forEach(function(value) {
    console.log(value);
  });
}

let dominoes = initalizeDomino();

dominoes.sort(function (a: Domino, b: Domino): number {
  return(a.compareTo(b))
})

print(dominoes);






// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]