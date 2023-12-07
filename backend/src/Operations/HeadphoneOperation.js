
const headphoneModel = require("../models/headphonemodel");


 const  insertHeadphoneData = async (req, res) => {

  try {
    const products = req.body;
    if (Array.isArray(products)) {
      let result;
      products.map(async (data) => {
        try {
          const headphone = new headphoneModel(data);
          result = await headphone.save();
        } catch (err) {
          throw err
        }
      });
    } else {
      const headphone = new headphoneModel(products);
      result = await headphone.save();
    }
    res.send({ msg: "successfully inserted" });
  } catch (err) {

    res.status(400).send(err);
  }
}

module.exports = {insertHeadphoneData}