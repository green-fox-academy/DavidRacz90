import { Station } from "./station";
import { Car } from "./Car";

let gasStation = new Station(400);

let car = new Car();

console.log(car)

gasStation.refill(car, car.capacity)

console.log(car)
console.log(gasStation)