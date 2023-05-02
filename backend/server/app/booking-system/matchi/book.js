const login = require("./login");
require("dotenv/config");

module.exports = async (bookingData) => {
  const { slotID } = bookingData.booking_extra.booking_system_slot_id;
  const { facilityID } = bookingData.facility.booking_system_facility_id;
  const couponID = 17111;
  // Validera korrekt Slot ID
  if (!slotID) {
    throw new Error("Missing Slot ID");
  }
  if (slotID.length !== 32) {
    throw new Error("Invalid Slot ID");
  }

  const cookies = await login();
  const url = `https://www.matchi.se/bookingPayment/payEntryPoint?slotIds=${slotID}&facilityId=${facilityID}&method=GIFT_CARD&customerCouponId=${couponID}`;
  console.log(url);
  const response = await fetch(url, {
    headers: {
      Cookie: cookies,
    },
    credentials: "include",
  });

  console.log(response.headers.get("location"));
  return response.headers.get("Location");
};

// matchi.ingress=1682449277.609.454.161594|3fa8edba434f2ee898239e3e876bcab4; Path=/; HttpOnly; JSESSIONID=04660109DED6E22F26512D7C5FC3A6BE; Path=/; Secure; SameSite=None
// matchi.ingress=1682449826.145.222.278322|3fa8edba434f2ee898239e3e876bcab4; Path=/; HttpOnly; JSESSIONID=EA945B4DCDB9666365377BEE2DE41D95; Path=/; Secure; SameSite=None
