import {Instrument} from "./instrument"
import { stringedInstrument } from "./stringedInstrument";

export  class Guitar extends stringedInstrument {

  constructor(numberOfStrings?: number) {
    super('Electirc guitar', numberOfStrings )
  }
   
  sound(): string {
    return 'Twang';
  }

  play(): void {

    console.log(`${this.name} a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
  }
}