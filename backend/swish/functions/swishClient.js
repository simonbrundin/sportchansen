const fs = require("fs");
const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  cert: fs.readFileSync("./functions/ssl/public.pem", { encoding: "utf8" }),
  key: fs.readFileSync("./functions/ssl/private.key", { encoding: "utf8" }),
  ca: fs.readFileSync("./functions/ssl/Swish_TLS_RootCA.pem", {
    encoding: "utf8",
  }),
});

// Using Axios as HTTP library
const swishClient = axios.create({
  httpsAgent: agent,
  baseURL: "https://mss.cpc.getswish.net/swish-cpcapi",
});

module.exports = swishClient;
