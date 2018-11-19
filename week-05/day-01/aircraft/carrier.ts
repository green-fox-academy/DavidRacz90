import { Aircrafts } from "./aircrafts"
import { F16 } from "./f16"
import { F35 } from "./f35"

export class Carrier {

  aircraftList: Aircrafts[] = [];
  storeOfAmmo: number;

  healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number, ) {
    this.healthPoint = healthPoint;
    this.storeOfAmmo = storeOfAmmo;
  }

  add(aircrafts: Aircrafts) {
    this.aircraftList.push(aircrafts)
  }

  fill() {
    
    
    if (this.storeOfAmmo < 0) {
      throw new Error('Out of Ammo')      
    } try {
      carrier.fill
    } catch (e) {
      console.log(e.message);
    }

    

    

    }
 }



}
let carrier = new Carrier(500, 500)
let k = new F16;

