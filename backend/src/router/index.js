const express = require("express");
const router = express.Router();

const dbConnection = require("../Database/db")


const { insertPhonesData } = require("../Operations/PhoneOperations");
const { insertLaptopData } = require("../Operations/LaptopOperations");
const { insertTabData } = require("../Operations/TabOperation");
const { insertHeadphoneData } = require("../Operations/HeadphoneOperation");

const phoneModel = require("../models/phonemodel");

// creating home page requist
router.get("/", (req, res) => {
  res.send("Home page Request's Responce");
});

//For Getting Phone data from db
router.get("/getphone", async (req, res) => {
  try {
    const phones = await phoneModel.find({});
    res.send(phones)
    // const result = await phoneModel.find({})
  }
  catch (err) {
    res.status(400).send(err)
  }
});

// for Post request 
router.post("/insertdata/phone", insertPhonesData);
router.post("/insertdata/tab", insertTabData);
router.post("/insertdata/laptop", insertLaptopData);
router.post("/insertdata/headphone", insertHeadphoneData);

module.exports = router;
