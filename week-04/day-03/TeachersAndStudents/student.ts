import { Teacher } from "./teacher"

export class students {
    name: string;

    constructor(name) {
        this.name = name;
    }

    learn() {
        console.log(`${this.name} learned this thing`);
    }

    question(teacher: Teacher) {
        teacher.answer();
    }
}