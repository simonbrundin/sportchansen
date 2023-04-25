const createSwishLink = require("../services/createSwishLink");
const getPaymentRequest = require("../services/getPaymentRequest");

module.exports = async (req, res) => {
  const amount = 100;
  const message = "Swish";
  const paymentRequest = await getPaymentRequest(amount, message);
  const swishLink = createSwishLink(paymentRequest.id, paymentRequest.token);
  res.send(swishLink);
};
