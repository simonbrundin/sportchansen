const express = require("express");

const { postBook } = require("./controllers/book");
const { postCallback } = require("./controllers/swish");

const router = express.Router();

// router.post("/callback", swish.callback);
// router.post("/payment-status", swish.getPaymentStatus);
router.post("/book", postBook);
router.post("/swish/callback", postCallback);

module.exports = router;
