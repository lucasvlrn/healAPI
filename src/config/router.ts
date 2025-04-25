const express = require("express");
const router = express.Router();
const limiter = require("../middlewares/rate-limit");
const foodController = require("../controllers/food-controller");

router.get("/food", foodController.fetchFoods);
module.exports = router;
