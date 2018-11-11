'use strict';
export{};


// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average


const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function moreThanFourCandies(listOfStudents) {
    let atLeastFourCandies = 0;
    for(let i: number = 0; i < listOfStudents.length; i++) {
        let student = listOfStudents[i];
        if(student.candies > 4) {
            atLeastFourCandies++;
        }
    }
    return atLeastFourCandies;
}

console.log(moreThanFourCandies(students));

function averageOfCandies(listOfStudents) {
    let average = 0;
    let sumOfCandies = 0;
    for(let i = 0; i < listOfStudents.length; i++) {
        let student = listOfStudents[i];
        sumOfCandies += student.candies;
        average = sumOfCandies / listOfStudents.length;
    }
    return average;
}

console.log(averageOfCandies(students));