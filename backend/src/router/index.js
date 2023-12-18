const express = require("express");
const router = express.Router();
const dbConnection = require("../Database/db")

const { insertPhonesData } = require("../Operations/PhoneOperations");
const { insertLaptopData } = require("../Operations/LaptopOperations");
const { insertTabData } = require("../Operations/TabOperation");
const { insertHeadphoneData } = require("../Operations/HeadphoneOperation");
const { registerUser } = require("../Operations/registrationOperation");

const phoneModel = require("../models/phonemodel");
const tabModel = require("../models/tabsmodel");
const laptopModel = require("../models/laptopmodel");
const headphoneModel = require("../models/headphonemodel");
const registerModel = require("../models/registerModel");
const { ObjectId } = require("mongodb");

// creating home page requist
router.get("/", (req, res) => {
  res.send("Home page Request's Responce");
});

//For Getting Phone data from db ----------------------------->
router.get("/getphone", async (req, res) => {
  try {
    const phones = await phoneModel.find({});
    res.send(phones)
  }
  catch (err) {
    res.status(400).send(err)
  }
});
//For Getting tablet data from db ---------------------------->
router.get("/gettab", async (req, res) => {
  try {
    const tabs = await tabModel.find({});
    res.send(tabs)
  }
  catch (err) {
    res.status(400).send(err)
  }
});
//For Getting laptop data from db ---------------------------->
router.get("/getlaptop", async (req, res) => {
  try {
    const laptops = await laptopModel.find({});
    res.send(laptops)
  }
  catch (err) {
    res.status(400).send(err)
  }
});
//For Getting headphone data from db ------------------------->
router.get("/getheadphone", async (req, res) => {
  try {
    const headphones = await headphoneModel.find({});
    res.send(headphones)
  }
  catch (err) {
    res.status(400).send(err)
  }
});

// Data Filteration------------------------------------------->
// search Phone
router.get(`/searchphone`, async (req, res) => {
  try {
    let phone = req.query.value
    const phones = await phoneModel.find({
      $or: [
        { model: { '$regex': phone, $options: "i" } },
        { brand: { '$regex': phone, $options: "i" } },
      ]
    });
    res.send(phones)
  }
  catch (err) {
    res.send(err)
  }
})
// search tablet
router.get(`/searchtab`, async (req, res) => {
  try {
    let tab = req.query.value
    const tabs = await tabModel.find({
      $or: [
        { model: { '$regex': tab, $options: "i" } },
        { brand: { '$regex': tab, $options: "i" } },
      ]
    });
    res.send(tabs)
  }
  catch (err) {
    res.send(err)
  }
})
// search laptop
router.get(`/searchlaptop`, async (req, res) => {
  try {
    let laptop = req.query.value
    const laptops = await laptopModel.find({
      $or: [
        { model: { '$regex': laptop, $options: "i" } },
        { brand: { '$regex': laptop, $options: "i" } },
      ]
    });
    res.send(laptops)
  }
  catch (err) {
    res.send(err)
  }
})
// search headphone
router.get(`/searchheadphone`, async (req, res) => {
  try {
    let headphone = req.query.value
    const headphones = await headphoneModel.find({
      $or: [
        { model: { '$regex': headphone, $options: "i" } },
        { brand: { '$regex': headphone, $options: "i" } },
      ]
    });
    res.send(headphones)
  }
  catch (err) {
    res.send(err)
  }
})

// for All Post request ------------------------->
router.post("/insertdata/phone", insertPhonesData);
router.post("/insertdata/tab", insertTabData);
router.post("/insertdata/laptop", insertLaptopData);
router.post("/insertdata/headphone", insertHeadphoneData);
router.post("/insertdata/register", registerUser);
router.post(`/login`, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await registerModel.findOne({ email, password });
    if (user) {
      console.log(user);
      res.send(user);
    } else {
      res.status(404).send('User not found / Register First');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})
// Update Product--------------------------------->
router.post(`/update`, async (req, res) => {
  try {
    let productType = req.body.productType;
    let id = req.body.id;
    let price = Number(req.body.priceValue)
    let model = req.body.modelValue;
    let SearchModel;
    if (productType === "phone") { SearchModel = phoneModel }
    else if (productType === "tab") { SearchModel = tabModel }
    else if (productType === "laptop") { SearchModel = laptopModel }
    else if (productType === "headphone") { SearchModel = headphoneModel }

    const details = await SearchModel.updateOne({ _id: id }, { $set: { model: model, price: price } });
    if (details && details.modifiedCount > 0) {
      console.log('Update successful:', details);
      res.json('update successfully');
    } else {
      res.status(404).send('Update failed, no document modified');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})

//Delete product
router.post("/delete", async (req, res) => {
  try {
    let id = req.body.id;
    let productType = req.body.productType;
    let SearchModel;

    if (productType === "phone") { SearchModel = phoneModel }
    else if (productType === "tab") { SearchModel = tabModel }
    else if (productType === "laptop") { SearchModel = laptopModel }
    else if (productType === "headphone") { SearchModel = headphoneModel }

    const deletedProduct = await SearchModel.deleteOne({ _id: id })
    if (deletedProduct && deletedProduct.deletedCount> 0) {
      console.log('deleted successful:', deletedProduct);
      res.json('delete successfully');
    } else {
      res.status(404).send('failed to delete');
    }
  }
  catch(err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
})


module.exports = router;
