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
    const response = await fetch(
      "https://www.matchi.se/j_spring_security_check",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "application/x-www-form-urlencoded; charset=utf-8",
          Connection: "close",
          Host: "www.matchi.se",
        },
        credentials: "include",
        redirect: "manual",
      }
    );
    console.log(priceToPay);
  } catch (error) {
    throw error;
  }

  // // TODO: Logga in och få cookie
  // login();
  // // TODO: Boka tiden
};
