const makeBookings = (n) => {
  // returns n number of bookings
  // default is 5

  const num = n || 5;
  const bookings = [];
  for (let i = 0; i < num; i++) {
    bookings.push({
      id: i + 1,
      description: `Booking ${i}`,
      space_id: i + 1
    });
  }
  return bookings;
};

export const bookings = makeBookings(200);
