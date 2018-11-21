import { Vehicle } from "./vehicle"
import { Flyable } from "./flyable";

export class Helicopter extends Vehicle implements Flyable {
  
  constructor(name: string, color: string, numberOfWeels: number){
    super(name, color, numberOfWeels)

  }
  land(){
    console.log(`${this.name} has landed`)
  };
  fly() {
    console.log(`${this.name} is flying`)
  };
  
  takeOff(){
    console.log(`${this.name} taking off`)
  };
}