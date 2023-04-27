const getPaymentRequest = require("./getPaymentRequest");
module.exports = async (userPrice, bookingID) => {
  const paymentRequest = await getPaymentRequest(userPrice, bookingID);

  const callbackUrl = `https://simonbrundin.github.io/sportchansen/booked?paymentRequestId=${paymentRequest.id}`;
  const swishUrl = `swish://paymentrequest?token=${paymentRequest.token}&callbackurl=${callbackUrl}`;
  return swishUrl;
};
