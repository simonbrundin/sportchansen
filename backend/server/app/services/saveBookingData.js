const { gql } = require("graphql-request");
const queryHasura = require("./queryHasura");
module.exports = async (body, userID, prices, fees) => {
  try {
    // Skapa ny bokning i databasen
    const response = await queryHasura(
      gql`
        mutation MyMutation(
          $facility_id: Int!
          $start_time: timestamptz!
          $user_id: uuid!
          $duration: smallint!
        ) {
          insert_booking_one(
            object: {
              facility_id: $facility_id
              start_time: $start_time
              user_id: $user_id
              duration: $duration
            }
          ) {
            id
          }
        }
      `,
      {
        facility_id: body.facilityID,
        start_time: body.startTime,
        user_id: userID,
        duration: body.duration,
      }
    );
    const bookingID = response.insert_booking_one.id;

    // Spara bokningsekonomi
    await queryHasura(
      gql`
        mutation MyMutation(
          $booking_id: Int!
          $card_fee: Float!
          $booking_fixed: smallint!
          $booking_percent: smallint!
          $full_price: smallint!
          $subsidy: smallint
          $subsidy_fixed: smallint!
          $subsidy_percent: smallint!
          $user_price: smallint!
        ) {
          insert_booking_economy_one(
            object: {
              booking_id: $booking_id
              card_fee: $card_fee
              booking_fixed: $booking_fixed
              booking_percent: $booking_percent
              full_price: $full_price
              subsidy: $subsidy
              subsidy_fixed: $subsidy_fixed
              subsidy_percent: $subsidy_percent
              user_price: $user_price
            }
          ) {
            booking_id
          }
        }
      `,
      {
        booking_id: bookingID,
        card_fee: fees.card_fee,
        booking_fixed: fees.booking_fixed,
        booking_percent: fees.booking_percent,
        full_price: prices.fullPrice,
        subsidy: fees.subsidy,
        subsidy_fixed: fees.subsidy_fixed,
        subsidy_percent: fees.subsidy_percent,
        user_price: prices.userPrice,
      }
    );

    // Spara extra information för bokningssystemet
    await queryHasura(
      gql`
        mutation MyMutation(
          $booking_id: Int
          $booking_system_slot_id: String
          $court_id: String
          $court_name: String
        ) {
          insert_booking_extra_one(
            object: {
              booking_id: $booking_id
              booking_system_slot_id: $booking_system_slot_id
              court_id: $court_id
              court_name: $court_name
            }
          ) {
            booking_id
          }
        }
      `,
      {
        booking_id: bookingID,
        booking_system_slot_id: body.bookingSystemData.slotID,
        court_id: body.bookingSystemData.courtID,
        court_name: body.bookingSystemData.courtName,
      }
    );

    return bookingID;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
