const generateUUID = require("./generateUUID");
const swishClient = require("./swishClient");

async function getPaymentRequest(amount, message) {
  const instructionUUID = generateUUID();
  const data = {
    payeeAlias: "1234679304",
    currency: "SEK",
    callbackUrl: "https://your-callback-url.com",
    amount,
    message,
  };

  try {
    const response = await swishClient.put(
      `/api/v2/paymentrequests/${instructionUUID}`,
      data
    );

    if (response.status === 201) {
      const { paymentrequesttoken } = response.headers;
      return { id: instructionUUID, token: paymentrequesttoken };
    }
  } catch (error) {
    // console.log("hmm");
    console.error("swish", error);
  }
}

module.exports = getPaymentRequest;
