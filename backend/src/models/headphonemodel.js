const { model, Schema } = require("mongoose");

// Schema for headphones----------->
const headphoneSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  driverSize: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default:"Wireless headphones",
    required: true,
  },
  batteryLife: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    required: true,
    type: String,
  }
});

const headphoneModel = new model("headphones", headphoneSchema);
module.exports = headphoneModel