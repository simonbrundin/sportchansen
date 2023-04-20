const fs = require("fs");
const https = require("https");
const axios = require("axios");
const express = require("express");
const { log } = require("console");
const app = express();
app.use(express.json());
const port = process.env.PORT || 7343;

// const pgp = require("pg-promise")(/* options */);
// const db = pgp("postgres://username:password@host:port/postgres");

// db.one("SELECT $1 AS value", 123)
//   .then((data) => {
//     console.log("DATA:", data.value);
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

const addPaymentRequestToDatabase = async (paymentRequest) => {
  const endpoint = "https://sportchansen/v1/graphql";
  const headers = {
    "content-type": "application/json",
    Authorization: "<token>",
  };
  const graphqlQuery = {
    operationName: "fetchAuthor",
    query: `query fetchAuthor { author { id name } }`,
    variables: {},
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();

  console.log(data.data); // data
  console.log(data.errors); //
};

app.post("/swish-callback", (req, res) => {
  console.log(req.body.status);
  // const ipAdress = req.socket.remoteAddress;
  // const allowedIpAdress = "213.132.115.94:443";
  // if (ipAdress !== allowedIpAdress) {
  //   res.status(403).send("Forbidden");
  //   return;
  // }
  res.status(200).send("OK");
});

const agent = new https.Agent({
  cert: fs.readFileSync("./ssl/public.pem", { encoding: "utf8" }),
  key: fs.readFileSync("./ssl/private.key", { encoding: "utf8" }),
  ca: fs.readFileSync("./ssl/Swish_TLS_RootCA.pem", { encoding: "utf8" }),
});

// Using Axios as HTTP library
const client = axios.create({
  httpsAgent: agent,
});

// Skapar ett unikt UUID för varje payment request
function generateUUID() {
  const hexDigits = "0123456789ABCDEF";
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    uuid += hexDigits[Math.floor(Math.random() * 16)];
  }
  return uuid;
}

async function createPaymentRequest(amount, message) {
  const instructionUUID = generateUUID();

  const data = {
    payeeAlias: "1234679304",
    currency: "SEK",
    callbackUrl: "https://your-callback-url.com",
    amount,
    message,
  };

  try {
    const response = await client.put(
      `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionUUID}`,
      data
    );

    if (response.status === 201) {
      const { paymentrequesttoken } = response.headers;
      return { id: instructionUUID, token: paymentrequesttoken };
    }
  } catch (error) {
    // console.log("hmm");
    console.error("swish", error);
  }
}

const createSwishLink = async (amount, message) => {
  const paymentRequest = await createPaymentRequest(amount, message);

  const callbackUrl = `https://simonbrundin.github.io/sportchansen/booked?paymentRequestId=${paymentRequest.id}`;
  const appUrl = `swish://paymentrequest?token=${paymentRequest.token}&callbackurl=${callbackUrl}`;
  console.log(appUrl);
  return appUrl;
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
