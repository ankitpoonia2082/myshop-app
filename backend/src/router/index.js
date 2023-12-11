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
    // const result = await phoneModel.find({})
    if (!phones || phones.length === 0) {
      return res.status(404).send('Phone not found');
    }
    const phone = phones[0];
    res.set('Content-Type', phone.img.contentType); // Set the correct content type
    res.send(phone.img.data); // Send the image data as a response
    // res.send(result)
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
