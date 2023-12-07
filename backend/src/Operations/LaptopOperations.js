
const laptopModel = require("../models/laptopmodel");

 const  insertLaptopData = async (req, res) => {

  try {
    const products = req.body;
    if (Array.isArray(products)) {
      let result;
      products.map(async (data) => {
        try {
          const laptop = new laptopModel(data);
          result = await laptop.save();
        } catch (err) {
          throw err
        }
      });
    } else {
      const laptop = new laptopModel(products);
      result = await laptop.save();
    }
    res.send({ msg: "Laptop successfully added" });
  } catch (err) {

    res.status(400).send(err);
  }
}

module.exports = {insertLaptopData}