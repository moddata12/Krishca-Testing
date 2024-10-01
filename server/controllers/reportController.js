const MetersModel = require('../models/Meters');

//Report0

// Route to initially fetch all data from the table
const Report0 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 11 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report1

const Report1 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 12 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report2 Start

const Report2 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 13 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report3 Start

const Report3 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 14 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report4 Start

const Report4 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 15 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report 5 start

const Report5 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 16 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report6 Start

const Report6 =async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 17 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report7 start

const Report7 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 18 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report8 start

const Report8 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 19 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report9 Start

const Report9 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 20 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report10 Start

const Report10 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 21 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report11 Start

const Report11 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 22 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report 12 Start

const Report12 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 23 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report13 Start

const Report13 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 24 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report 14 Start

const Report14 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 25 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  //Report 15 Start

const Report15 = async (req, res) => {
    try {
      // Query all documents from the database, sorted by datetime
      const allDocuments = await MetersModel.find({ mid: 26 }).sort({ datetime: -1 });
  
      // Process each document
      allDocuments.forEach(document => {
        // Perform operations on each document here
        console.log(document);
      });
  
      res.json(allDocuments); // Sending all documents as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports = {
     
    Report0, Report1, Report2, Report3, Report4, Report5, Report6, Report7,
    Report8, Report9, Report10, Report11, Report12, Report13, Report14, Report15,
};