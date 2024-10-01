const express = require('express');
const router = express.Router();
const logoutController = require("../controllers/logoutController.js");

router.post('/logout', logoutController.logout);

module.exports = router;