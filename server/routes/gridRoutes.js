const express = require("express");
const router = express.Router();
const gridController = require("../controllers/gridController");

router.get('/getPreviousMaxPower', gridController.Grid3);
router.get('/getCurrentMaxPower', gridController.Grid4);

module.exports = router;