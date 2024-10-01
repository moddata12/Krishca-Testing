const express = require("express");
const router = express.Router();
const radarController = require("../controllers/radarController");

router.get('/maxmonth', radarController.Radardata);

module.exports = router;
