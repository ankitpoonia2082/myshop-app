const { model, Schema } = require("mongoose");

// Schema for tablets----------->
const tabSchema = new Schema({
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

const tabModel = new model("tabs", tabSchema);
module.exports = tabModel