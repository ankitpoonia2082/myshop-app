const { model, Schema } = require("mongoose");

// Schema for Laptops----------->
const laptopSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  screenSize: {
    type: Number,
    required: true,
  },
  storage: {
    type: Number,
    required: true,
  },
  processer: {
    type: String,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const laptopModel = new model("laptops", laptopSchema);
module.exports = laptopModel