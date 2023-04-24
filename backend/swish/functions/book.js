//
const book = (bookingSystem, data) => {
  const bookSystem = require(`../booking-system/${bookingSystem}/book`);
  bookSystem(data);
};

module.exports = book;
