// 3rd Party Modules
const express = require("express");
const cors = require("cors");
require("dotenv/config");

// Local Modules
// const myRoute = require("./routes/myRoute.js");
const routes = require("./routes");

// Server Initialization
const app = express();
const port = process.env.PORT || 7777;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes will be written here
app.use("/", routes);

// Server Listen Along with Database
// connection(in case of data persistence)
app.listen(port, () => console.log(`Lyssnar på port ${port}`));
