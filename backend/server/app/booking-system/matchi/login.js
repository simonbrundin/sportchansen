const queryHasura = require("../../services/queryHasura");
const { gql } = require("graphql-request");

module.exports = async () => {
  // todo: Hämta Matchi användarnamn och lösenord

  const data = await queryHasura(
    gql`
      query MyQuery($booking_system_id: smallint!) {
        booking_system_login_by_pk(booking_system_id: $booking_system_id) {
          password
          username
        }
      }
    `,
    { booking_system_id: 1 }
  );
  // const user = getMatchiUser(data);
  // console.log("Matchi");
  // TODO: Logga in och få cookie

  // TODO: Boka tiden
};
