const createSwishLink = require("../functions/createSwishLink");
const getPaymentRequest = require("../functions/getPaymentRequest");
const validateJWT = require("../functions/validateJWT");

module.exports = async (req, res) => {
  // TODO: Validera användare via jwt
  try {
    validateJWT(req);
  } catch (error) {
    console.error(error);
    res.status(401).send("Kunde inte validera token");
    return;
  }

  // TODO: Beräkna priset
  const amount = 100;
  const message = "Swish";

  const paymentRequest = await getPaymentRequest(amount, message);
  const swishLink = createSwishLink(paymentRequest.id, paymentRequest.token);
  res.send(swishLink);
};
