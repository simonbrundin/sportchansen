const getFullPrice = require("./getFullPrice");
const getUserPrice = require("./getUserPrice");
const getFees = require("./getFees");

module.exports = async (data) => {
  const fullPrice = await getFullPrice(data);
  const fees = await getFees(data);
  const userPrice = await getUserPrice(fullPrice, fees);

  return { prices: { fullPrice, userPrice }, fees };
};
