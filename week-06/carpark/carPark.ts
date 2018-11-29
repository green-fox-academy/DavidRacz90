import { Car } from "./car"
import { readFromFile, writeToFile, appendToFile } from "./fileIO"

class CarPark {

  private parkingCars: Car[] = []

  addCar(car: Car): void {
    this.parkingCars.push(car)
  }

  getParkingCars(): Car[] {
    return this.parkingCars;
  }

  addCarToFile(car: Car) {
    appendToFile('cars.csv', `${car.getLicensePlate()}, ${car.getManufactureYear()}, ${car.getHasTicket()} \r\n`);
  }
}

let opel = new Car('ABC-123', 10, 2005, 1);
let audi = new Car('DAV-727', 11, 1990, 1);
let mercedes = new Car('JJJ-111', 12, 2010, 0);
let newCarPark = new CarPark;

newCarPark.addCar(opel);
newCarPark.addCar(audi);
newCarPark.addCar(mercedes);

newCarPark.addCarToFile(opel);
newCarPark.addCarToFile(audi);
newCarPark.addCarToFile(mercedes);


console.log(newCarPark.getParkingCars());
readFromFile('cars.txt')