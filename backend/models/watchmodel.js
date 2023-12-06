const { model, Schema } = require("mongoose");

// Schema for watch----------->
const watchSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    default: "Smartwatch",
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

//Creating models
const watchModel = new model("watches", watchSchema);

module.exports = watchModel
