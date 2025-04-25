const express = require("express");
const router = express.Router();
const limiter = require("../middlewares/rate-limit");
const foodController = require("../controllers/food-controller");

router.get("/food", foodController.fetchFoods);
router.post("/insert-all", limiter.limiter, foodController.insertFoods);

module.exports = router;
