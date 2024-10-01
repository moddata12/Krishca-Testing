const MetersModel = require('../models/Meters');

//Linechart
const linechartdata = async (req, res) => {
    try {
      const measurements = await MetersModel.find({ mid: 11 }).sort({ datetime: -1 }).limit(20);
      if (!measurements || measurements.length === 0) {
        return res.status(404).json({ error: "No measurements found" });
      }
      res.json(measurements);
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  //Doughnutchart
  const doughnutchartdata = async (req, res) => {
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

  module.exports = {
     
    linechartdata,
    doughnutchartdata,
};
  