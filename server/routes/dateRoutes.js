const express = require("express");
const router = express.Router();
const dateController = require("../controllers/dateController");

router.get('/report0Date', dateController.Date0);
router.get('/report1Date', dateController.Date1);
router.get('/report2Date', dateController.Date2);
router.get('/report3Date', dateController.Date3);
router.get('/report4Date', dateController.Date4);
router.get('/report5Date', dateController.Date5);
router.get('/report6Date', dateController.Date6);
router.get('/report7Date', dateController.Date7);
router.get('/report8Date', dateController.Date8);
router.get('/report9Date', dateController.Date9);
router.get('/report10Date', dateController.Date10);
router.get('/report11Date', dateController.Date11);
router.get('/report12Date', dateController.Date12);
router.get('/report13Date', dateController.Date13);
router.get('/report14Date', dateController.Date14);
router.get('/report15Date', dateController.Date15);

module.exports = router;