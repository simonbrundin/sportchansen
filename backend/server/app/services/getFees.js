const queryHasura = require("./queryHasura");
const { gql } = require("graphql-request");
module.exports = async (data) => {
  const res = await queryHasura(
    gql`
      query MyQuery($facility_id: smallint!) {
        deal_by_pk(facility_id: $facility_id) {
          facility_id
          percent
        }
        fee(order_by: { date: asc }, limit: 1) {
          booking_fixed
          booking_percent
          card_fee
          subsidy_fixed
          subsidy_percent
        }
      }
    `,
    { facility_id: data.facilityID }
  );
  const dealPercentage = res.deal_by_pk.percent;
  const {
    card_fee,
    booking_percent,
    booking_fixed,
    subsidy_percent,
    subsidy_fixed,
  } = res.fee[0];
  return {
    dealPercentage,
    card_fee,
    booking_percent,
    booking_fixed,
    subsidy_percent,
    subsidy_fixed,
  };
};
