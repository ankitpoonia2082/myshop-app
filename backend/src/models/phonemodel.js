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
    default:"Black",
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
  img:{
    data:Buffer,
    contentType:String
  }
});

const phoneModel = new model("Phone", phoneSchema);

module.exports = phoneModel