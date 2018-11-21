import { Reservationy } from "./reservationy"
// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)

 class Reservation implements Reservationy{
  
  
  getDowBooking(): string {
    let DOW  = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN' ];   
      let randomDayIndex: number = Math.floor(Math.random()*DOW.length);
      let randomDay = DOW[randomDayIndex]

    return randomDay;
}

  getCodeBooking():string {
    
  }
}

let a = new Reservation()

console.log(a.getDowBooking())
