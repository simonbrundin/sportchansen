const express = require("express");

const { postBook } = require("./controllers/book");
const { postCallback } = require("./controllers/callback");

const router = express.Router();

// router.post("/callback", swish.callback);
// router.post("/payment-status", swish.getPaymentStatus);
router.post("/book", postBook);
router.post("/callback", postCallback);

module.exports = router;
