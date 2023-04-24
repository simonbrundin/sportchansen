require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = async (req) => {
  const JWT_SECRET = process.env.HASURA_GRAPHQL_JWT_SECRET;
  const authorizationHeader = req.headers.authorization || "";
  const token = authorizationHeader.split(" ")[1];
  const options = {
    algorithm: "HS256",
  };

  return jwt.verify(token, JWT_SECRET, options, (error, decoded) => {
    if (error) {
      return { error: error.message };
    }
    const userID = decoded["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
    return userID;
  });
};
