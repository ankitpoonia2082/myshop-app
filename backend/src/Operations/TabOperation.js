
const tabModel = require("../models/tabsmodel");

const insertTabData = async (req, res) => {
  try {
    const tab = new tabModel(req.body);
    const result = await tab.save();
    res.send({ msg: "successfully inserted", result });
  }
  catch (err) {
    console.log("🚀🚀🚀 TabOperations Error :->", err)

    res.status(400).send(err);
  }
}

module.exports = { insertTabData }