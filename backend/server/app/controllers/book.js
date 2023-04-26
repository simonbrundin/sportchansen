const bookTime = require("../services/bookTime");
const createSwishLink = require("../services/swish/-createSwishLink");
const validateJWT = require("../services/validateJWT");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postBook = async (req, res, next) => {
  const { facilityID, startDate, duration, bookingSystemData } = req.body;
  try {
    const userID = await validateJWT(req);
    const { prices, fees } = await getBookingEconomy(req.body);
    const bookingID = await createBooking({
      userID,
      facilityID,
      startDate,
      duration,
      bookingSystemData,
      prices,
      fees,
    });
    const swishLink = await createSwishLink(prices.priceToPay, bookingID);
    // await bookTime(data);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.status(200).send(swishLink);
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  postBook,
};
