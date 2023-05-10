const getBookingEconomy = require("../services/getBookingEconomy");
const createSwishLink = require("../services/swish/createSwishLink");
const validateJWT = require("../services/validateJWT");
const saveBookingData = require("../services/saveBookingData");
const createStripePaymentIntent = require("../services/stripe/createStripePaymentIntent");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postBook = async (req, res, next) => {
  // const { facilityID, startDate, duration, bookingSystemData } = req.body;
  try {
    const userID = await validateJWT(req);
    const { prices, fees } = await getBookingEconomy(req.body);
    console.log(prices, fees);
    300;
    const bookingID = await saveBookingData(req.body, userID, prices, fees);
    console.log(bookingID);
    const stripeClientSecret = await createStripePaymentIntent(
      prices.userPrice,
      bookingID
    );

    // const swishL ink = await createSwishLink(prices.userPrice, bookingID);
    // await bookTime(data);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.status(200).send(stripeClientSecret);
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  postBook,
};
