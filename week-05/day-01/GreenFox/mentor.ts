'use strict'
import { Person } from "./person"
// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints out 'My goal is: Educate brilliant junior software developers.'
// introduce(): 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate

export class Mentor extends Person {

  level: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age}, year old ${this.gender}, ${this.level} mentor`)
  }

  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.')
  }
}