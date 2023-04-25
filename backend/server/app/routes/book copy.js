const createSwishLink = require("../services/createSwishLink");
const getPaymentRequest = require("../services/getPaymentRequest");
const getUserIDfromJWT = require("../services/validateJWT");
const getPrice = require("../services/getPrice");

module.exports = async (req, res) => {
  // Få userID via jwt
  const userID = await getUserIDfromJWT(req);
  if (typeof userID === "object") {
    res.status(401).send(userID.error);
    return;
  }

  // TODO: Beräkna priset
  // todo: Kolla vad tiden kostar hos anläggningen
  console.log(req.body);
  const listPrice = getPrice(req.body);
  // todo: Kolla deal med anläggningen
  // todo: Formel (ordPris x (1 - anläggningsDeal x vårProcent) + fastAvgift + kortAvgift) x subventionsprocent - fastSubvention
  const amount = 100;
  const message = "Swish";

  const paymentRequest = await getPaymentRequest(amount, message);
  const swishLink = createSwishLink(paymentRequest.id, paymentRequest.token);
  res.send(swishLink);
};
