const Appointment = require("../model/booking");
module.exports.book = async (req, res, next) => {
  try {
    var book = new Appointment(req.body);
    const bookingData = await book.save();

    res.json({ message: "Appointment is booked.", data: bookingData });
  } catch (error) {
    console.log(error);
  }
};
