'use strict';

const students: any[] = [
    { name: 'Theodor', age: 3, candies: 2 },
    { name: 'Paul', age: 9.5, candies: 2 },
    { name: 'Mark', age: 12, candies: 5 },
    { name: 'Peter', age: 7, candies: 3 },
    { name: 'Olaf', age: 12, candies: 7 },
    { name: 'George', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter(listOfStudents) {
    let sumOfCandies = 0;
    for (let i: number = 0; i < listOfStudents.length; i++) {
        let student = listOfStudents[i];
        sumOfCandies += student.candies;
    }
    return sumOfCandies;
}

function ageCounter(listOfStudents) {
    let sumOfAge = 0;
    for(let i: number = 0; i < listOfStudents.length; i++) {
        let student = listOfStudents[i];
        if(student.candies < 5) {
            sumOfAge += student.age;
        }
    }
    return sumOfAge;
}


console.log(candyCounter(students));
console.log(ageCounter(students));