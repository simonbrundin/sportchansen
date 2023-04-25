//
module.exports = (data) => {
  const bookSystem = require(`../booking-system/${data.booking_system}/price`);
  bookSystem(data);
};
