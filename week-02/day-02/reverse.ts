// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

export { }

let numList = [3, 4, 5, 6, 7];

let reverseList: number[] = reversingList(numList);

console.log(reverseList);

function reversingList(numList: number[]):number[] {
    let result: number[] = [];
    for(let i:number = 0; i < numList.length; i++) {
       result = numList.reverse();
        
    }
    return result;
}


