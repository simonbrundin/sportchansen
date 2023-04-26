const login = require("./login");
module.exports = async (data) => {
  const { slotID } = data.bookingSystemData;
  // Validera korrekt Slot ID
  if (!slotID) {
    throw new Error("Missing Slot ID");
  }
  if (slotID.length !== 32) {
    throw new Error("Invalid Slot ID");
  }

  const cookies = await login();

  const response = await fetch(
    `https://www.matchi.se/bookingPayment/updateConfirmModalModel?slotIds=${slotID}&firstSlotIds=${slotID}`,
    {
      headers: {
        Cookie: cookies,
      },
      credentials: "include",
    }
  );

  const json = await response.json();
  const price = json.totalPrice;

  return price;
};

// matchi.ingress=1682449277.609.454.161594|3fa8edba434f2ee898239e3e876bcab4; Path=/; HttpOnly; JSESSIONID=04660109DED6E22F26512D7C5FC3A6BE; Path=/; Secure; SameSite=None
// matchi.ingress=1682449826.145.222.278322|3fa8edba434f2ee898239e3e876bcab4; Path=/; HttpOnly; JSESSIONID=EA945B4DCDB9666365377BEE2DE41D95; Path=/; Secure; SameSite=None
