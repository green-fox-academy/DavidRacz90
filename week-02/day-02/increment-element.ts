// -  Create a variable named `numList` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element simply by accessing it
// -  Log the third element to the console

let numList = [1,2,3,4,5];

let newNumList = numList.map(index =>{
    if (numList[2] === numList[2]){
        numList[2]+=numList[2];
        return index;
    }
})

console.log(newNumList[2]);