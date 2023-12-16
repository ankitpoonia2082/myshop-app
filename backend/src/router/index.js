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

// creating home page requist
router.get("/", (req, res) => {
  res.send("Home page Request's Responce");
});

//For Getting Phone data from db ------------------------->
router.get("/getphone", async (req, res) => {
  try {
    const phones = await phoneModel.find({});
    res.send(phones)
  }
  catch (err) {
    res.status(400).send(err)
  }
});

//For Getting tablet data from db ------------------------->
router.get("/gettab", async (req, res) => {
  try {
    const tabs = await tabModel.find({});
    res.send(tabs)
  }
  catch (err) {
    res.status(400).send(err)
  }
});

//For Getting laptop data from db ------------------------->
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


// Data Filteration--------------------------------------------->
// search Phone by model
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

// Data Filteration------------->
// search tablet by model
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

// Data Filteration------------->
// search laptop by model
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

// Data Filteration / Finding Data------------->

// search headphone by model
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

// User Registration(POST)
router.post("/insertdata/register", registerUser);

// user Login
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

module.exports = router;
