const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController.js");
const verifyUser = require("../middlewares/verifyUser.js");


router.get('/users', verifyUser(['admin']), usersController.getUsers);
router.put('/users/:id', verifyUser(['admin']), usersController.updateUser);
router.delete('/users/:id', verifyUser(['admin']), usersController.deleteUser);

module.exports = router;
