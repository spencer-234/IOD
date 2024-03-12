import express from "express";
import * as functions from "../controllers/calculatorController.js";

const router = express.Router();

router.get("/add", functions.add);

router.get("/subtract", functions.subtract)

router.get("/divide", functions.divide)

router.get("/multiply", functions.multiply)

router.get("/modulus", functions.modulus)

export default router;
