const fs = require("fs");
const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  cert: fs.readFileSync(
    "/Users/simon/Repos/sportchansen/backend/server/app/services/swish/ssl/public.pem",
    {
      encoding: "utf8",
    }
  ),
  key: fs.readFileSync(
    "/Users/simon/Repos/sportchansen/backend/server/app/services/swish/ssl/private.key",
    {
      encoding: "utf8",
    }
  ),
  ca: fs.readFileSync(
    "/Users/simon/Repos/sportchansen/backend/server/app/services/swish/ssl/Swish_TLS_RootCA.pem",
    { encoding: "utf8" }
  ),
});

// Using Axios as HTTP library
const swishClient = axios.create({
  httpsAgent: agent,
  baseURL: "https://mss.cpc.getswish.net/swish-cpcapi",
});

module.exports = swishClient;
