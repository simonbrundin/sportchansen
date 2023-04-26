module.exports = async (fullPrice, fees) => {
  const userPrice = Math.ceil(
    fullPrice * (1 - (fees.dealPercentage - fees.booking_percent) / 100) +
      fees.booking_fixed +
      fees.card_fee
  );
  return userPrice;
};
