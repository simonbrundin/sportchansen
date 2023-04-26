const { gql } = require("graphql-request");
const queryHasura = require("./queryHasura");
module.exports = async (data) => {
  const response = await queryHasura(
    gql`
      query MyQuery($id: Int!) {
        facility_by_pk(id: $id) {
          booking_system {
            name
          }
        }
      }
    `,
    { id: data.facilityID }
  );
  const bookingSystem = response.facility_by_pk.booking_system.name;
  const fullPriceFromBookingSystem = require(`../booking-system/${bookingSystem}/price`);
  const fullPrice = await fullPriceFromBookingSystem(data);
  return fullPrice;
};
