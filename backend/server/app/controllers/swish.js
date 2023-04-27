const createSwishLink = require("../services/swish/createSwishLink");
const postCallback = async (req, res, next) => {
  try {
    const swishLink = await createSwishLink(123, 1234);

    res.status(200).send(swishLink);
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  postCallback,
};
