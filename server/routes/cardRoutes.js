const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");

router.get('/getCard0', cardController.Card0);
router.get('/getCard1', cardController.Card1);
router.get('/getCard2', cardController.Card2);
router.get('/getCard3', cardController.Card3);
router.get('/getCard4', cardController.Card4);
router.get('/getCard5', cardController.Card5);
router.get('/getCard6', cardController.Card6);
router.get('/getCard7', cardController.Card7);
router.get('/getCard8', cardController.Card8);
router.get('/getCard9', cardController.Card9);
router.get('/getCard10', cardController.Card10);
router.get('/getCard11', cardController.Card11);
router.get('/getCard12', cardController.Card12);
router.get('/getCard13', cardController.Card13);
router.get('/getCard14', cardController.Card14);
router.get('/getCard15', cardController.Card15);

module.exports = router;