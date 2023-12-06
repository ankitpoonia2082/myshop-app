const { model, Schema } = require("mongoose");
// Schema for Phones----------->
const phoneSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  storage: {
    type: Number,
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

const phoneModel = new model("phones", phoneSchema);

module.exports = phoneModel