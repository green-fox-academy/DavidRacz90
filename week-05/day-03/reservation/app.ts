import {Reservation} from "./reservation"

function initalizeReservations(): Reservation[] {
  let reservationArray = []
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  reservationArray.push(new Reservation);
  return reservationArray;
}
let reservations: Reservation[] = initalizeReservations();

reservations.forEach(e => {
  console.log(`Booking# ${e.getCodeBooking()} for ${e.getDowBooking()}`)
})


