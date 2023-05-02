const bookTime = require("../../services/bookTime");
const getBooking = require("../../services/getBooking");
module.exports = async (req, res, next) => {
  try {
    // todo Validera att det är swish som requesten kommer ifrån

    const bookingID = req.body.bookingID;
    const booking = await getBooking(bookingID);
    await bookTime(booking);
    await updateBookingStatus(bookingID, true);
    res.status(200).send("ok");
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};
