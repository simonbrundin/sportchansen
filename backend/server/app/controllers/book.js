const bookTime = require("../services/bookTime");
const validateJWT = require("../services/validateJWT");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const postBook = async (req, res, next) => {
  const data = req.body;
  try {
    await validateJWT(req);
    await bookTime(data);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201);
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postBook,
};
