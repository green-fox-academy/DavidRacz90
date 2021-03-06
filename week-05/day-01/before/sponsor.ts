'use strict'

// Create a Sponsor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// company: name of the company
// hiredStudents: number of students hired
// method:
// introduce(): "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
// hire(): increase hiredStudents by 1
// getGoal(): prints out "Hire brilliant junior software developers."
// The Sponsor class has the following constructors:

// Sponsor(name, age, gender, company): beside the given parameters, it sets hiredStudents to 0
// Sponsor(): sets name to Jane Doe, age to 30, gender to female, company to Google and hiredStudents to 0

export class Sponsor {

  name: string;
  age: number;
  gender: string;
  company: string;
  hiredStudent: number = 0;


  constructor(name = 'Jane Doe', age = 30, gender = 'female', company = 'Google') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} who represents ${this.company} and hired ${this.hiredStudent} students so far.`)
  }

  getGoal() {
    console.log('Hire brilliant junior software developers.')
  }

  hire() {
    this.hiredStudent++;
  }

}

