'use strict'
// Create a function that takes a list as a parameter,
// and returns a new list with every second element from the original list
// example: [1, 2, 3, 4, 5] should produce [2, 4] - print this result




function seconds(arr: number[]): number[] {
  let secondList: number[] = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      secondList.push(arr[i]);
    }
  }
  return secondList
}

console.log(seconds([1, 2, 3, 4, 5]));