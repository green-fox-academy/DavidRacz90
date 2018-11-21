

export abstract class Vehicle  {
  
  name: string;
  color: string;
  numberOfWheels: string;

  constructor(name: string, color: string, numberOfWheels) {
    this.name = name;
    this.color = color;
    this.numberOfWheels = numberOfWheels;
  }

  
}