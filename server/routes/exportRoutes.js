const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.get('/exportReport0', reportController.Report0);
router.get('/exportReport1', reportController.Report1);
router.get('/exportReport2', reportController.Report2);
router.get('/exportReport3', reportController.Report3);
router.get('/exportReport4', reportController.Report4);
router.get('/exportReport5', reportController.Report5);
router.get('/exportReport6', reportController.Report6);
router.get('/exportReport7', reportController.Report7);
router.get('/exportReport8', reportController.Report8);
router.get('/exportReport9', reportController.Report9);
router.get('/exportReport10', reportController.Report10);
router.get('/exportReport11', reportController.Report11);
router.get('/exportReport12', reportController.Report12);
router.get('/exportReport13', reportController.Report13);
router.get('/exportReport14', reportController.Report14);
router.get('/exportReport15', reportController.Report15);

module.exports = router;