import { Student } from "./student";
import { Mentor } from "../before/mentor";

'use strict'



// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists

export class Cohort {

  name: string;
  students: Student []  = [];
  mentors: Mentor[]  = [];

  constructor(name: string) {
    this.name = name;
  }

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
  }
}