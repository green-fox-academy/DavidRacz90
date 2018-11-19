import { Aircrafts} from "./aircrafts"

export class F35 extends Aircrafts {

  constructor(currentAmmo: number = 0, maxAmountOfAmmo: number = 12, baseDamage: number = 50, type: string = 'F35') {
    super(currentAmmo, maxAmountOfAmmo, baseDamage, type)
  }
}