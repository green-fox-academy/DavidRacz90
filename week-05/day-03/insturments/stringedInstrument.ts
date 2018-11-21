'use strict'
// Next, we add another abstract class, StringedInstrument which extends Instrument. It

// introduces numberOfStrings and
// sound() method what's implementation is yet unknown
// but with the help of the sound() the play() method is fully implementable

import { Instrument } from "./instrument"

export abstract class stringedInstrument extends Instrument {

  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings?: number) {
    super(name)
    this.numberOfStrings = numberOfStrings;
  }
  sound(): string {
    return 
  }

  
}