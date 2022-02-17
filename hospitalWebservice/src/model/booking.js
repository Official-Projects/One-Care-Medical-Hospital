const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  age: { type: Number, required: true },
  address: { type: Number, required: true },
  apointType: { type: Boolean, required: true },
});

const Book = mongoose.model("bookings", bookingSchema);

module.exports = Book;
