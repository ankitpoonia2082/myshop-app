const { model, Schema } = require("mongoose");

// Schema for TV----------->
const tvSchema = new Schema({
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
  price: {
    type: Number,
    required: true,
  },
});

const tvModel = new model("tv", tvSchema);
module.exports = tvModel