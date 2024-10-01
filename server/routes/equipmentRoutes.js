const express = require('express');
const router = express.Router();
const equipmentController = require("../controllers/equipmentController.js");
const verifyUser = require("../middlewares/verifyUser.js");


router.post('/equipments', verifyUser(['admin']), equipmentController.newEquipment);
router.get('/equipments', verifyUser(['admin']), equipmentController.getEquipment);
router.get('/equipmenttable', verifyUser(['visitor']), equipmentController.fetchEquipment);
router.put('/equipments/:id', verifyUser(['admin']), equipmentController.updateEquipment);
router.delete('/equipments/:id', verifyUser(['admin']), equipmentController.deleteEquipment);
// Define other equipment-related routes...

module.exports = router;
