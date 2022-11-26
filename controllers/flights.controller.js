const { flights } = require("../db.json");
const errorHandler = require("../utils/errorHandler");

module.exports.getFlights = async (req, res) => {
  try {
    res.status(200).send(flights);
  } catch (error) {
    errorHandler(res, error);
  }
};
