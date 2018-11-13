// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

export {}

class Counter {
    startingNumber: number = 0;

    constructor(staringNumber) {
        this.startingNumber = staringNumber;
    }

    addingNumbers(number: number) {
        this.startingNumber = this.startingNumber + number;
    }

    add(){
        this.startingNumber++;
    }

    get() {
         return this.startingNumber.toString();
        
    }

    reset() {
        this.startingNumber = 0;
    }
}

let newNumber = new Counter(5);
console.log(newNumber);

newNumber.addingNumbers(5);
console.log(newNumber);

newNumber.add();
console.log(newNumber);

newNumber.get();
console.log(newNumber);

newNumber.reset();
console.log(newNumber);