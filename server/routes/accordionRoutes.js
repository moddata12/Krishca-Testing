const express = require("express");
const router = express.Router();
const accordionController = require("../controllers/accordionController");

router.get('/totalTimeDifference', accordionController.Accordion);

module.exports = router;