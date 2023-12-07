
const tabModel = require("../models/tabsmodel");

 const  insertTabData = async (req, res) => {

  try {
    const products = req.body;
    if (Array.isArray(products)) {
      let result;
      products.map(async (data) => {
        try {
          const tab = new tabModel(data);
          result = await tab.save();
        } catch (err) {
          throw err
        }
      });
    } else {
      const tab = new tabModel(products);
      result = await tab.save();
    }
    res.send({ msg: "Tab successfully added" });
  } catch (err) {

    res.status(400).send(err);
  }
}

module.exports = {insertTabData}