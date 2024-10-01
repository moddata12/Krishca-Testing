const MetersModel = require('../models/Meters');

//Grid3

const Grid3 = async (req, res) => {
    try {
      const currentDate = new Date();
      const previousMonth = (currentDate.getMonth() === 0) ? 12 : currentDate.getMonth();
      const previousYear = (previousMonth === 12) ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
  
      // Aggregate query to find the maximum power consumption for the previous month
      const maxPowerData = await MetersModel.aggregate([
        {
          $match: {
            mid: 11, // Assuming mid is the meter ID
            datetime: {
              $gte: new Date(previousYear, previousMonth - 1, 1),
              $lt: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
            }
          }
        },
        {
          $group: {
            _id: null,
            max_power: { $max: "$measurements.power" }
          }
        }
      ]);
  
      // Send the max power data as JSON response
      res.json(maxPowerData);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Send error response if any
    }
  };
  
  //Grid4
  
 const Grid4 = async (req, res) => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();
  
      // Aggregate query to find the maximum power consumption for the current month
      const maxPowerData = await MetersModel.aggregate([
        {
          $match: {
            mid: 11, // Assuming mid is the meter ID
            datetime: {
              $gte: new Date(currentYear, currentMonth - 1, 1),
              $lt: new Date(currentYear, currentMonth, 1)
            }
          }
        },
        {
          $group: {
            _id: null,
            max_power: { $max: "$measurements.power" }
          }
        }
      ]);
  
      // Send the max power data as JSON response
      res.json(maxPowerData);
    } catch (error) {
      res.status(500).json({ error: error.message }); // Send error response if any
    }
  };

  module.exports = {
     
    Grid3, Grid4,
};