const express = require("express");
const authToken = require("../middleware/token");
const router = express.Router();
const bookingService = require("../service/booking");
router.get("/bookAppointment", authToken, bookingService.book);
module.exports = router;
