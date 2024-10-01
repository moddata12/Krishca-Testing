const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

router.get('/Report0Data', reportController.Report0);
router.get('/Report1Data', reportController.Report1);
router.get('/Report2Data', reportController.Report2);
router.get('/Report3Data', reportController.Report3);
router.get('/Report4Data', reportController.Report4);
router.get('/Report5Data', reportController.Report5);
router.get('/Report6Data', reportController.Report6);
router.get('/Report7Data', reportController.Report7);
router.get('/Report8Data', reportController.Report8);
router.get('/Report9Data', reportController.Report9);
router.get('/Report10Data', reportController.Report10);
router.get('/Report11Data', reportController.Report11);
router.get('/Report12Data', reportController.Report12);
router.get('/Report13Data', reportController.Report13);
router.get('/Report14Data', reportController.Report14);
router.get('/Report15Data', reportController.Report15);

module.exports = router;