const bookTime = require("../services/bookTime");
const postCallback = async (req, res, next) => {
  try {
    // todo Get bookingID from body

    // todo Get Booking from database

    // todo Book time
    const bookingData = {
      facility: { booking_system: "matchi" },
      user_id: 123,
      start_time: 123,
      bookingSystemData: {
        slotID: "2c942173852ebf5a01852ec873216b4e",
        facilityID: 1584,
      },
    };
    const bookingResponse = await bookTime(bookingData);
    console.log(bookingResponse);
    console.log("här");

    // todo Save booking information to database
    res.status(200).send("ok");
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  postCallback,
};
