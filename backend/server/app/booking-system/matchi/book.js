const queryHasura = require("../../services/queryHasura");
const { gql } = require("graphql-request");
const price = require("./price");
const finalPrice = require("../../services/finalPrice");
module.exports = async (bookingData) => {
  try {
    const { slotID } = bookingData.booking_system_data;
    const startingPrice = await price(slotID);
    const priceToPay = await finalPrice(
      startingPrice,
      bookingData.facility.facility_id,
      bookingData.user_id
    );
  } catch (error) {
    throw error;
  }

  // // TODO: Logga in och få cookie
  // login();
  // // TODO: Boka tiden
};
