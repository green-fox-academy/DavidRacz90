import { Animal } from "./animal"
import { Flyable } from "../flyable";


export class Bird extends Animal implements Flyable {



  constructor(name: string) {
    super(name)
  }


  getName(): string{
    return this.name
  }

  eat(): void{
    console.log((`the ${this.name} eats`));
  }

  breed(): string {
    return 'laying eggs.'
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