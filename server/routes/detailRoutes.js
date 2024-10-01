const express = require('express');
const router = express.Router();
const detailsController = require("../controllers/detailsController.js");
const verifyUser = require("../middlewares/verifyUser.js");


router.post('/details', verifyUser(['admin']), detailsController.newDetail);
router.get('/details', verifyUser(['admin']), detailsController.getDetails);
router.get('/detailtable', verifyUser(['visitor']), detailsController.fetchDetails);
router.put('/details/:id', verifyUser(['admin']), detailsController.updateDetail);
router.delete('/details/:id', verifyUser(['admin']), detailsController.deleteDetail);
// Define other details-related routes...

module.exports = router;
