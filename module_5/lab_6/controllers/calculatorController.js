import Calculator from "../libraries/Calculator.js";
import Logger from "../libraries/Logger.js";

let myCalc = new Calculator();
let myLog = new Logger(myCalc.id);

export const add = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let message = req.query.msg;
  let sum = myCalc.add(num1, num2);
  myLog.log(message, sum);
  res.status(200).json({ result: sum });
};

export const subtract = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let message = req.query.msg;
  let sum = myCalc.subtract(num1, num2);
  myLog.log(message, sum);
  res.status(200).json({ result: sum });
};

export const divide = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let message = req.query.msg;
  let sum = myCalc.divide(num1, num2);
  myLog.log(message, sum);
  res.status(200);
  res.json({ result: sum });
};

export const multiply = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let message = req.query.msg;
  let sum = myCalc.multiply(num1, num2);
  myLog.log(message, sum);
  res.status(200).json({ result: sum });
};

export const modulus = (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  let message = req.query.msg;
  let sum = myCalc.modulus(num1, num2);
  myLog.log(message, sum);
  res.status(200).json({ result: sum });
};
