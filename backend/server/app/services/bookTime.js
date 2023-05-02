//
const bookTime = async (bookingData) => {
  // Validate data
  const bookingSystem = bookingData.facility?.booking_system.name;
  if (bookingSystem === undefined) {
    throw new Error("Booking system not found");
  }
  const userID = bookingData.user_id;
  if (userID === undefined) {
    throw new Error("User ID not found");
  }
  const startTime = bookingData.start_time;
  if (startTime === undefined) {
    throw new Error("Start time not found");
  }
  try {
    // Book time in right booking system
    const bookTimeInBookingSystem = require(`../booking-system/${bookingSystem}/book`);

    await bookTimeInBookingSystem(bookingData);
  } catch (error) {
    throw error;
  }
};

module.exports = bookTime;
