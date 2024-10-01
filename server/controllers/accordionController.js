const MetersModel = require('../models/Meters');
const convertToIndianTime = require('../utils/convertToIndianTime');

//DG1 Time
const Accordion = async (req, res) => {
    try {
      // Query for mid: 12 DG-2
      const measurements12 = await MetersModel.find({ mid: 12 }).sort({ datetime: -1 }).limit(1);
      if (!measurements12 || measurements12.length === 0) {
        return res.status(404).json({ error: "No measurements found for mid: 12" });
      }
      const lastUpdated12 = measurements12[0].datetime;
  
      // Query for mid: 13 Main MV Panel
      const measurements13 = await MetersModel.find({ mid: 13 }).sort({ datetime: -1 }).limit(1);
      if (!measurements13 || measurements13.length === 0) {
        return res.status(404).json({ error: "No measurements found for mid: 13" });
      }
      const lastUpdated13 = measurements13[0].datetime;
  
      // Query for mid: 11 DG-1
      const measurements11 = await MetersModel.find({ mid: 11 }).sort({ datetime: -1 }).limit(1);
      if (!measurements11 || measurements11.length === 0) {
        return res.status(404).json({ error: "No measurements found for mid: 11" });
      }
      const lastUpdated11 = measurements11[0].datetime;
  
      // Calculate time differences
      const totalTimeDifference12_13 = Math.abs(new Date(lastUpdated12) - new Date(lastUpdated13));
      const totalTimeDifference11_13 = Math.abs(new Date(lastUpdated11) - new Date(lastUpdated13));
  
      // Include last updated times and total time differences in the response
      res.json({
        lastUpdatedMid12: lastUpdated12,
        lastUpdatedMid13: lastUpdated13,
        lastUpdatedMid11: lastUpdated11,
        totalTimeDifference12_13: totalTimeDifference12_13,
        totalTimeDifference11_13: totalTimeDifference11_13
      });
    } catch (error) {
      console.error("Error fetching measurements:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  module.exports = {
    Accordion,
};