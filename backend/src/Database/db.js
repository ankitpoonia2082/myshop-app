const mongoose = require("mongoose");
const mongodb = require("mongodb");

// Connection String(port and db)
const uri = `mongodb://localhost:27017/shop-app`;

module.exports = {
  connectToDb: mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    }),
};

