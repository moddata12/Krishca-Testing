const express = require("express");
const router = express.Router();
const chartController = require("../controllers/chartController");

router.get('/measurements', chartController.linechartdata);
router.get('/getLatestMeterData', chartController.doughnutchartdata);

module.exports = router;