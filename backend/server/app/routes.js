const express = require("express");

const { postBook } = require("./controllers/book");
const swishCallback = require("./controllers/callback/swish");
const stripeCallback = require("./controllers/callback/stripe");

const router = express.Router();

// router.post("/callback", swish.callback);
// router.post("/payment-status", swish.getPaymentStatus);
router.post("/book", postBook);
router.post("/callback/swish", swishCallback);
router.post("/callback/stripe", stripeCallback);

module.exports = router;
