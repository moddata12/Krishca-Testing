const MetersModel = require('../models/Meters');
const convertToIndianTime = require('../utils/convertToIndianTime');

// Route to get data within a specified date range
const Date0 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 11,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date1 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 12,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date2 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 13,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date3 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 14,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date4 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 15,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date5 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 16,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date6 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 17,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date7 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 18,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date8 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 19,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date9 = async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 20,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date10 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 21,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date11 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 22,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date12 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 23,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date13 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 24,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date14 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 25,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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

  // Route to get data within a specified date range
const Date15 =  async (req, res) => {
    const { start_date, end_date } = req.query;
  
    try {
      const maxGap = 15; // Maximum allowed gap in days
  
      // Convert start_date and end_date to Date objects
      const startDate = new Date(start_date);
      let endDate = new Date(end_date);
      
      // Increment endDate by one day to include the entire selected end date
      endDate.setDate(endDate.getDate() + 1);
  
      // Calculate the difference in days between start_date and end_date
      const dayDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
      // If the difference exceeds the maximum allowed gap, adjust the endDate
      if (dayDifference > maxGap) {
        endDate = new Date(startDate.getTime() + maxGap * 24 * 60 * 60 * 1000);
        // Alert message indicating that the date range has been adjusted
        console.log('Date range exceeded maximum allowed gap of 15 days. Adjusting end date.');
      }
  
      // Query all documents from the database, sorted by datetime in ascending order
      const documents = await MetersModel.find({ 
        mid: 26,
        datetime: { $gte: startDate, $lt: endDate } // Filter by date range
      }).sort({ datetime: 1 });
  
      // Initialize an array to store formatted data
      const formattedData = [];
  
      // Process each document
      documents.forEach(document => {
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
     
    Date0, Date1, Date2, Date3, Date4, Date5, Date6, Date7, Date8,
    Date9, Date10, Date11, Date12, Date13, Date14, Date15,
};