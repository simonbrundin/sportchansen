const book = require("../services/book");
module.exports = async (req, res) => {
  // TODO: Koppla ihop databasen
  // TODO: Skapa en Payment tabell som sparar callback-datan
  // todo: Boka tiden
  book("matchi", { userID: "1234" });
  res.send("ok");
};
