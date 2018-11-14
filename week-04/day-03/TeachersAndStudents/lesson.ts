import { students } from "./student";
import { Teacher } from "./teacher"


let student = new students('Sanyi');

student.learn();

let teacher = new Teacher('Pisti bá');

teacher.teach(student);