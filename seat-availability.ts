export type SeatBooking = {
  bookingId: string;
  passengerCount: number;
  status: "CONFIRMED" | "CANCELLED";
};

export type SeatAvailability = {
  seatsBooked: number;
  seatsAvailable: number;
  isFull: boolean;
};

export function calculateSeatAvailability(
  totalSeats: number,
  bookings: SeatBooking[]
): SeatAvailability {
  let seatsBooked = 0;

  bookings.forEach((booking) => {
    seatsBooked += booking.passengerCount;
  });

  return {
    seatsBooked,
    seatsAvailable: totalSeats - seatsBooked,
    isFull: seatsBooked >= totalSeats
  };
}
