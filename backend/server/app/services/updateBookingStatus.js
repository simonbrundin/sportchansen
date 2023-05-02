const queryHasura = require("./queryHasura");
const { gql } = require("graphql-request");
module.exports = async (bookingID, status) => {
  const res = await queryHasura(
    gql`
      mutation MyMutation($id: Int!, $is_booked: Boolean!) {
        update_booking_by_pk(
          pk_columns: { id: $id }
          _set: { is_booked: $is_booked }
        ) {
          is_booked
          id
        }
      }
    `,
    { id: bookingID, is_booked: status }
  );

  return res.update_booking_by_pk;
};
