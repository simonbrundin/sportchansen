const stripe = require("stripe")(process.env.STRIPE_KEY);
module.exports = async (amount, bookingID) => {
  // Set your secret key. Remember to switch to your live secret key in production.
  // See your keys here: https://dashboard.stripe.com/apikeys
  console.log(process.env.STRIPE_KEY);
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "sek",
    automatic_payment_methods: {
      enabled: true,
    },
    metadata: {
      bookingID,
    },
  });
  return paymentIntent.client_secret;
};
