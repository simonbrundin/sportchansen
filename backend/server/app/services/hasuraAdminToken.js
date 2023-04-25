const jwt = require("jsonwebtoken");

module.exports = () => {
  const JWT_SECRET = process.env.HASURA_JWT_SECRET;
  function dateToEpoch(date) {
    return Math.floor(date / 1000);
  }
  const iat = dateToEpoch(Date.now());
  const exp = iat + 900;

  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["me", "admin"],
      "x-hasura-default-role": "admin",
      "x-hasura-user-id": "cd11bb63-dbc9-4b45-8e56-59303522e1ca",
    },
    sub: "cd11bb63-dbc9-4b45-8e56-59303522e1ca",
    iat,
    exp,
    iss: "hasura-auth",
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};
