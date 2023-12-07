const express = require("express");
const router = express.Router();

const { insertPhonesData } = require("../Operations/PhoneOperations");
const { insertLaptopData } = require("../Operations/LaptopOperations");
const { insertTabData } = require("../Operations/TabOperation");
const { insertHeadphoneData } = require("../Operations/HeadphoneOperation");

// creating home page requist
router.get("/", (req, res) => {
  res.send("Request's Responce");
});

router.post("/insertdata/phones", insertPhonesData);
router.post("/insertdata/tab", insertTabData);
router.post("/insertdata/laptop", insertLaptopData);
router.post("/insertdata/headphone", insertHeadphoneData);

module.exports = router;
