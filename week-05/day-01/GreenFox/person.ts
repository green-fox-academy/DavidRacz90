'use strict'

// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (whole number)
// gender: the gender of the person (male / female)
// And the following methods:

// introduce(): prints out "Hi, I'm name, a age year old gender."
// getGoal(): prints out "My goal is: Live for the moment!"
// And the following constructors:

// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female

export class Person {

  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name = 'Jane Doe', age = 30, gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} old ${this.gender}.`)
  }

  getGoal() {
    console.log('My goal is: Live for the moment!')
  }

}
