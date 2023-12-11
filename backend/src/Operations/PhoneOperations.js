
const phoneModel = require("../models/phonemodel");


const insertPhonesData = async (req, res) => {
  try {
    const products = req.body;
    console.log("🚀 ~ file: PhoneOperations.js:8 ~ insertPhonesData ~ products:", products)
    const phones = new phoneModel(req.body);
    const result = await phones.save();
    res.send({ msg: "successfully inserted", result });
  } 
  catch (err) {
  console.log("🚀🚀🚀 PhoneOperations Error :->" , err)

    res.status(400).send(err);
  }
}

module.exports = { insertPhonesData }