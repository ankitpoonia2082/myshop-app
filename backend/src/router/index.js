const express = require("express");
const router = express.Router();

const dbConnection = require("../Database/db")


const { insertPhonesData } = require("../Operations/PhoneOperations");
const { insertLaptopData } = require("../Operations/LaptopOperations");
const { insertTabData } = require("../Operations/TabOperation");
const { insertHeadphoneData } = require("../Operations/HeadphoneOperation");

const phoneModel = require("../models/phonemodel");
const tabModel = require("../models/tabsmodel");
const laptopModel = require("../models/laptopmodel");
const headphoneModel = require("../models/headphonemodel");

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


// Data Filteration------------->
// search Phone by model
router.get(`/searchphone`,async(req,res)=>{
  try{
    let phone = req.query.model
    const phones = await phoneModel.find({model:phone || {brand:phone} ||{price:phone}});
    res.send(phones)
  }
  catch(err){
    res.send(`No product found related to ${req.data}`)
  }
})




// for Post request ------------------------->
router.post("/insertdata/phone", insertPhonesData);
router.post("/insertdata/tab", insertTabData);
router.post("/insertdata/laptop", insertLaptopData);
router.post("/insertdata/headphone", insertHeadphoneData);

module.exports = router;
