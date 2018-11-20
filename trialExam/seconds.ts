'use strict'
// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the original list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result


let numlist: number[] = [1, 2, 3, 4, 5]

function seconds(arr: number[]): number[] {
  let secondList: number[];
  for (let i: number = 0; i < arr.length; i++) {
    if (numlist.indexOf[i] % 2 === 1) {
      secondList.push(numlist[i]);
      return secondList;
    }
  }
}

console.log(seconds(numlist));