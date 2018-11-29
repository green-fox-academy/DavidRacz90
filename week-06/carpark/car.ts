import { runInThisContext } from "vm";

'use strict'

export class Car {

  private licensePlate: string;
  private iD: number;
  private manufactureYear: number;
  private hasTicket: number;

  constructor(licensePlate: string, iD: number, manufactureYear: number, hasTicket: number) {
    this.licensePlate = licensePlate;
    this.iD = iD;
    this.manufactureYear = manufactureYear;
    this.hasTicket = hasTicket;
  }

  getLicensePlate(): string {
    return this.licensePlate;
  }

  getID(): number {
    return this.iD;
  }

  getManufactureYear(): number {
    return this.manufactureYear;
  }

  getHasTicket(): number {
    return this.hasTicket;
  }
}