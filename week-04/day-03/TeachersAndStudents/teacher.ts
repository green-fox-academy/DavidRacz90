import { students } from "./student";

export class Teacher {
    
    name: string;

    constructor(name) {
        this.name = name;
    }

    teach(student: students) {
        student.learn();
    }

    answer() {
        
    }
}