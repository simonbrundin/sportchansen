const createSwishLink = (paymentRequestID, paymentRequestToken) => {
  const callbackUrl = `https://simonbrundin.github.io/sportchansen/booked?paymentRequestId=${paymentRequestID}`;
  const swishUrl = `swish://paymentrequest?token=${paymentRequestToken}&callbackurl=${callbackUrl}`;
  return swishUrl;
};

module.exports = createSwishLink;
