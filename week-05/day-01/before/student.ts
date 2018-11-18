'use strict'

// Student
// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course
// methods:
// getGoal(): prints out "Be a junior software developer."
// introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
// skipDays(numberOfDays): increases skippedDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

export class Student {

  name: string;
  age: number;
  gender: string;
  previousOrganization: string;
  skippedDays: number = 0;


  constructor(name = 'Jane Doe', age = 30, gender = 'female', previosOrganization = 'The School of Life') {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previosOrganization;
  }

  intrduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} from the course already.`)
  }

  getGoal() {
    console.log('Be a junior software developer')
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}


