const createSwishLink = require("../functions/createSwishLink");
const getPaymentRequest = require("../functions/getPaymentRequest");

module.exports = async (req, res) => {
  // TODO: Beräkna priset
  const amount = 100;
  const message = "Swish";
  const paymentRequest = await getPaymentRequest(amount, message);
  const swishLink = createSwishLink(paymentRequest.id, paymentRequest.token);
  res.send(swishLink);
};
