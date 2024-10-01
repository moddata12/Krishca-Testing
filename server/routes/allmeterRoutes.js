const express = require("express");
const router = express.Router();
const allmeterController = require("../controllers/allmeterController");

router.get('/getMeters', allmeterController.getMeters);
router.get('/input', allmeterController.input);

module.exports = router;