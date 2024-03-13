const express = require("express");
const functions = require("../controllers/calculatorController.js");

const router = express.Router();

router.get("/add", functions.add);

router.get("/subtract", functions.subtract)

router.get("/divide", functions.divide)

router.get("/multiply", functions.multiply)

router.get("/modulus", functions.modulus)

module.exports = router;
