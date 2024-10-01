const express = require('express');
const router = express.Router();
const pageController = require("../controllers/pageController.js");
const verifyUser = require('../middlewares/verifyUser.js');

router.get("/control", verifyUser(['admin']), pageController.control);
router.get("/client", verifyUser(['admin']), pageController.client);
router.get("/service", verifyUser(['admin']), pageController.service);
router.get("/detailsvisitor", verifyUser(['visitor']), pageController.detailsVisitor);
router.get("/homevisitor", verifyUser(['visitor']), pageController.homeVisitor);
router.get("/viewvisitor", verifyUser(['visitor']), pageController.viewVisitor);
router.get("/logout", verifyUser(['visitor']), pageController.logout);

module.exports = router;
