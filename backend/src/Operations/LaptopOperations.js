
const laptopModel = require("../models/laptopmodel");

const insertLaptopData = async (req, res) => {

  try {
    const products = req.body;
    const laptop = new laptopModel(products);
    result = await laptop.save();
    res.send({ msg: "Laptop successfully added" });
  } catch (err) {
    console.log("🚀🚀🚀 LaptopOperations Error :->" , err)
    res.status(400).send(err);
  }
}

module.exports = { insertLaptopData }