const express = require("express");

const { book } = require("../controllers/book");

const router = express.Router();

router.post("/", book.bookTime);

module.exports = router;
