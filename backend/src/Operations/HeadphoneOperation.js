
const headphoneModel = require("../models/headphonemodel");


const insertHeadphoneData = async (req, res) => {

  try {
    const products = req.body;
    const headphone = new headphoneModel(products);
    result = await headphone.save();
    res.send({ msg: "successfully inserted" });
  } catch (err) {
    console.log("🚀🚀🚀 HeadphoneOperations Error :->" , err)
    res.status(400).send(err);
  }
}

module.exports = { insertHeadphoneData }