require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = (req) => {
  const JWT_SECRET = process.env.HASURA_GRAPHQL_JWT_SECRET;
  console.log(JWT_SECRET);
  const authorizationHeader = req.headers.authorization || "";
  const token = authorizationHeader.split(" ")[1];
  console.log(token);
  const options = {
    algorithm: "HS256",
  };

  jwt.verify(token, JWT_SECRET, options, (error, decoded) => {
    if (error) {
      console.error(error);
      throw error;
    }

    console.log(decoded);
    console.log("Det gick bra ju");
    return decoded;
  });
};
