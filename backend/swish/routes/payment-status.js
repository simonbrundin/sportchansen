const swishClient = require("../functions/swishClient");
module.exports = async (req, res) => {
  const paymentRequestID = req.body.paymentRequestID;

  const response = await swishClient.get(
    `/api/v1/paymentrequests/${paymentRequestID}`
  );

  const paymentStatus = response.data.status;

  res.send(paymentStatus);
};
