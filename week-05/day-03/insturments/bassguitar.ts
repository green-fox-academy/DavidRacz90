import {Instrument} from "./instrument"
import { stringedInstrument } from "./stringedInstrument";

export  class Bassguitar extends stringedInstrument {

  constructor(numberOfstrings?: number) {
    super('Bass Guitar', numberOfstrings)
    
  }
   
  sound(): string {
    return 'Duum-duum-duum';
  }

  play(): void {

    console.log(`${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
  }
}

