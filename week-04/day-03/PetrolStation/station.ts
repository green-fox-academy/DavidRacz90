// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

import { Car } from "./Car"

export class Station {

    gasAmount: number;

    constructor( gasAmount: number) {
        this.gasAmount = gasAmount;
    }

    refill(car: Car, capacity: number) {
        this.gasAmount = this.gasAmount - car.capacity;
        car.gasAmount = car.gasAmount + 100;
    }
}