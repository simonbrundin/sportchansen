const createSwishLink = require("../functions/createSwishLink");
const getPaymentRequest = require("../functions/getPaymentRequest");

module.exports = async (req, res) => {
  const paymentRequest = await getPaymentRequest(
    req.body.amount,
    req.body.message
  );
  const swishLink = createSwishLink(paymentRequest.id, paymentRequest.token);
  res.send(swishLink);
};
