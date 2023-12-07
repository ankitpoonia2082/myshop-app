
const phoneModel = require("../models/phonemodel");

 const  insertPhonesData = async (req, res) => {

  try {
    const products = req.body;
    if (Array.isArray(products)) {
      let result;
      products.map(async (data) => {
        try {
          const phones = new phoneModel(data);
          result = await phones.save();
        } catch (err) {
          throw err
        }
      });
    } else {
      const phones = new phoneModel(products);
      result = await phones.save();
    }
    res.send({ msg: "successfully inserted" });
  } catch (err) {

    res.status(400).send(err);
  }
}

module.exports = {insertPhonesData}