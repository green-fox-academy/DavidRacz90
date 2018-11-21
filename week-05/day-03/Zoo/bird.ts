import { Animal } from "./animal"


export class Bird extends Animal {



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




  fly() {

  }


}