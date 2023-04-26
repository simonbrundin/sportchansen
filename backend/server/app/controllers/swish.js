/*
 * call other imported services, or same service but different functions here if you need to
 */
const postCallback = async (req, res, next) => {
  try {
    res.sendStatus(201);
    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = {
  postCallback,
};
