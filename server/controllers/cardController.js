const MetersModel = require('../models/Meters');

//Card0

const Card0 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 11 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card1
  
  const Card1 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 12 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card2
  
  const Card2 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 13 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card3
  
  const Card3 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 14 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card4
  
  const Card4 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 15 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card5
  
  const Card5 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 16 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card6
  
  const Card6 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 17 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card7
  
  const Card7 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 18 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card8
  
  const Card8 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 19 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card9
  
  const Card9 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 20 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card10
  
  const Card10 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 21 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card11
  
  const Card11 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 22 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card12
  
  const Card12 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 23 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card13
  
  const Card13 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 24 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card14
  
  const Card14 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 25 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  //Card15
  
  const Card15 = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 26 }).sort({ datetime: -1 }).limit(1);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  module.exports = {
     
    Card0, Card1, Card2, Card3, Card4, Card5, Card6,
    Card7, Card8, Card9, Card10, Card11, Card12, Card13,
    Card14, Card15,
};