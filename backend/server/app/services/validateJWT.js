require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = async (req) => {
  const JWT_SECRET = process.env.HASURA_JWT_SECRET;
  const authorizationHeader = req.headers.authorization || "";
  const token = authorizationHeader.split(" ")[1];
  const options = {
    algorithm: "HS256",
  };

  jwt.verify(token, JWT_SECRET, options, (error, decoded) => {
    if (error) {
      console.log(error);
      throw new Error(error.message);
    }
    const userID = decoded["https://hasura.io/jwt/claims"]["x-hasura-user-id"];
    return userID;
  });
};
