const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7777;

app.use(cors());
app.use(express.json());

app.post("/swish-link", require("./routes/swish-link"));
app.post("/callback", require("./routes/callback"));
app.post("/payment-status", require("./routes/payment-status"));
app.post("/book", require("./routes/book"));

app.listen(port, () => console.log(`Listening on port ${port}`));
