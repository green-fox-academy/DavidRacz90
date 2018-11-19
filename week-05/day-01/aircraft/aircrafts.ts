'use strict'

export class Aircrafts {
  currentAmmo: number;
  maxAmountOfAmmo: number;
  baseDamage: number;
  type: string;

  constructor(currentAmmo: number = 0, maxAmountOfAmmo: number, baseDamage: number) {
    this.currentAmmo = currentAmmo;
    this.maxAmountOfAmmo = maxAmountOfAmmo;
    this.baseDamage = baseDamage;
  }

  fight() {
    let damage = this.baseDamage * this.currentAmmo;
    return damage;
  }

  refill(amountOfAmmo: number) {
    let remainingAmmo = amountOfAmmo - (this.maxAmountOfAmmo - this.currentAmmo);

    if (remainingAmmo > this.maxAmountOfAmmo) {
      this.currentAmmo += this.maxAmountOfAmmo;
    } else {
      this.currentAmmo += amountOfAmmo;
    }
    return remainingAmmo;
  }

  getType() {
    return this.type;
  }

  getStatus() { 
    return(`Type ${this.type}, Ammo: ${this.maxAmountOfAmmo}, Damage ${this.baseDamage}, All Damage ${this.maxAmountOfAmmo * this.baseDamage}`);
  }

  isPriority(): boolean {
    if(this.type === 'F35') {
      return true;
    } else if(this.type === 'F16') {
      return false;
    }
  }
}



