// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100



import { Station } from "./station";

export class Car {

    gasAmount: number;
    capacity:  number;


    constructor(gasAmount = 0, Capacity = 100) {
        this.gasAmount = gasAmount;
        this.capacity = Capacity;
    }

}