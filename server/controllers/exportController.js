const MetersModel1 = require('../models/Meters1');
const convertToIndianTime = require('../utils/convertToIndianTime');

const Export0 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 11 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export1 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 12 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export2 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 13 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export3 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 14 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export4 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 15 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export5 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 16 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export6 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 17 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export7 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 18 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export8 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 19 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export9 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 20 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export10 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 21 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export11 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 22 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export12 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 23 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export13 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 24 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export14 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 25 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const Export15 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel1.find({ mid: 26 }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      allDocuments.forEach(document => {
        // Format datetime to Indian time
        const indianDateTime = convertToIndianTime(document.datetime);
        
        // Extract only the required fields and push them to the formattedData array
        formattedData.push({
          "Date/Time": indianDateTime,
          "Voltage": document.measurements[0].voltage,
          "Current": document.measurements[0].current,
          "Power": document.measurements[0].power,
          "Reactive Power": document.measurements[0].reactivepower,
          "Power Factor": document.measurements[0].powerfactor,
          "Frequency": document.measurements[0].frequency,
          "Panel Name": document.measurements[0].panelname,
          "Location": document.measurements[0].location
        });
      });
  
      res.json(formattedData); // Sending formatted data as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports = {
     
    Export0, Export1, Export2, Export3, Export4, Export5, Export6, Export7, Export8,
    Export9, Export10, Export11, Export12, Export13, Export14, Export15,
};