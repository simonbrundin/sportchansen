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
    { facility_id: data.facilityID }
  );
  const dealPercentage = res.deal_by_pk.percent;
  const { card_fee, booking_percent, booking_fixed } = res.fee_by_pk;
  return { dealPercentage, card_fee, booking_percent, booking_fixed };
};
