const { model, Schema } = require("mongoose");
// Schema for accessories----------->
const accessoriesSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  accessoriesType: {
    type: String,
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

const accessoriesModel = new model("accessories", accessoriesSchema);
module.exports = accessoriesModel