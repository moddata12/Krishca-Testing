const ServiceModel = require("../models/Service.js");

// Fetch Equipment Table Data
const fetchEquipment = async (req, res) => {
    try {
      const equipments = await ServiceModel.find();
      res.json(equipments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error fetching equipmenttable data" });
    }
  };
  
  // Get all equipments
  const getEquipment = async (req, res) => {
    try {
      const equipments = await ServiceModel.find();
      res.json(equipments);
    } catch (error) {
      console.error("Error fetching equipments:", error);
      res.status(500).json({ error: "Error fetching equipments data" });
    }
  };
  
  // Create a new equipment
  const newEquipment = async (req, res) => {
    try {
      const equipment = req.body;
      const newEquipment = await ServiceModel.create(equipment);
      res.status(201).json(newEquipment);
    } catch (error) {
      console.error("Error creating equipment:", error);
      res.status(500).json({ error: "Error creating equipment" });
    }
  };
  
  // Update a equipment
  const updateEquipment = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedEquipment = req.body;
      const equipment = await ServiceModel.findByIdAndUpdate(id, updatedEquipment, { new: true });
      res.json(equipment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating equipment" });
    }
  };
  
  // Delete a equipment
  const deleteEquipment = async (req, res) => {
    try {
      const { id } = req.params;
      await ServiceModel.findByIdAndDelete(id);
      res.json({ message: "Equipment deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error deleting equipment" });
    }
  };

  module.exports = {
    newEquipment, getEquipment, fetchEquipment, updateEquipment, deleteEquipment
  
};
  