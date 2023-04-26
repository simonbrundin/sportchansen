const queryHasura = require("./queryHasura");
const { gql } = require("graphql-request");
module.exports = async (startingPrice, facilityID, userID) => {
  const res = await queryHasura(
    gql`
      query MyQuery($facility_id: smallint!) {
        deal_by_pk(facility_id: $facility_id) {
          facility_id
          percent
        }
        fee_by_pk(id: "1") {
          subsidy_percent
          subsidy_fixed
          id
          card_fee
          booking_percent
          booking_fixed
        }
      }
    `,
    { facility_id: facilityID }
  );
  const dealPercentage = res.deal_by_pk.percent;
  const { card_fee, booking_percent, booking_fixed } = res.fee_by_pk;
  console.log(startingPrice);
  const finalPrice = Math.ceil(
    startingPrice * (1 - (dealPercentage - booking_percent) / 100) +
      booking_fixed +
      card_fee
  );
  console.log(finalPrice);
  return finalPrice;
};
