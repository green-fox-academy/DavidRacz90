import { Aircrafts } from "./aircrafts"

export class F16 extends Aircrafts {

  constructor(currentAmmo: number = 0, maxAmountOfAmmo: number = 8, baseDamage: number = 30, type: string = 'F16') {
    super(currentAmmo, maxAmountOfAmmo, baseDamage, type)
  }
}