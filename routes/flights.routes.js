const express = require("express");
const router = express.Router();
const controller = require("../controllers/flights.controller");

router.get("/flights", controller.getFlights);

module.exports = router;
