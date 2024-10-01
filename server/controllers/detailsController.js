const DetailsModel = require("../models/Details.js");

// Create Details - 
const newDetail = async (req, res) => {
    try {
      const detail = req.body;
      const newDetail = await DetailsModel.create(detail);
      res.status(201).json(newDetail);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error creating detail" });
    }
  }; 

//Get Details admin - 
const getDetails = async (req, res) => {
  try {
    const details = await DetailsModel.find();
    res.json(details);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching details" });
  }
};

//Get Details visitor - 
const fetchDetails = async (req, res) => {
    try {
      const details = await DetailsModel.find();
      res.json(details);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching detailtable" });
    }
  };

//Update Details - 
const updateDetail = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDetail = req.body;
      const detail = await DetailsModel.findByIdAndUpdate(id, updatedDetail, { new: true });
      res.json(detail);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating detail" });
    }
  };

//Delete Details - 
  const deleteDetail = async (req, res) => {
    try {
      const { id } = req.params;
      await DetailsModel.findByIdAndDelete(id);
      res.json({ message: "Detail deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting detail" });
    }
  };


module.exports = {
    newDetail, getDetails, fetchDetails, updateDetail, deleteDetail
  
};
