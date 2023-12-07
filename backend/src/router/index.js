const express = require("express");
const router = express.Router();
const phoneModel = require("../models/phonemodel");
const { insertPhonesData } = require("../Operations/PhoneOperations");

// creating home page requist
router.get("/", (req, res) => {
  res.send("Request's Responce");
});

router.post("/insertdata/phones", insertPhonesData);

module.exports = router;
