import {Instrument} from "./instrument"
import { stringedInstrument } from "./stringedInstrument";

export  class Violin extends stringedInstrument {

  constructor() {
    super('Violin', 4)
  }
   
  sound(): string {
    return 'Scretch';
  }

  play(): void {

    console.log(`${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
  }
}