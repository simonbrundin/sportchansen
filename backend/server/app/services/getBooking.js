const queryHasura = require("./queryHasura");
const { gql } = require("graphql-request");
module.exports = async (bookingID) => {
  const res = await queryHasura(
    gql`
      query MyQuery($id: Int!) {
        booking_by_pk(id: $id) {
          id
          duration
          facility {
            booking_system {
              name
            }
          }
          start_time
          booking_extra {
            booking_system_booking_id
            booking_system_slot_id
            court_id
            court_name
          }
        }
      }
    `,
    { id: bookingID }
  );

  return res.booking_by_pk;
};
