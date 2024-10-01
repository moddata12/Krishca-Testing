const MetersModel = require('../models/Meters');

//All data get from input form
const getMeters = async (req, res) => {
    try {
      const meters = await MetersModel.find(); // Retrieve all meters data
      res.json(meters); // Send the meters data as JSON response
    } catch (error) {
      res.status(500).json({ error: error.message }); // Send error response if any
    }
  };

  //Input form
const input = async (req, res) => {
    try {
      const { voltage, current, power, reactivepower, powerfactor, frequency, panelname, location, mid, datetime } = req.body;
      
      const newMeter = new MetersModel({ // Create a new meter document
        mid,
        datetime,
        measurements: [{
          voltage,
          current,
          power,
          reactivepower,
          powerfactor,
          frequency,
          panelname,
          location
        }]
      });
  
      const savedMeter = await newMeter.save(); // Save the new meter document to the database
      console.log("Meter created:", savedMeter);
      res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error creating meter:", error);
      res.status(500).json({ error: "Error occurred while saving data" });
    }
  };

  module.exports = {
     
    getMeters,
    input,
};