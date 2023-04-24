//
const book = (bookingSystem, data) => {
  const bookSystem = require(`../booking-system/${bookingSystem}`);
  bookSystem(data);
};

module.exports = book;
