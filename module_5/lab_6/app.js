const express = require('express');
const calculatorRoutes = require("./routes/calculatorRoutes.js");

const testApp = express();

testApp.use('/calculator', calculatorRoutes);

module.exports = testApp;