const mongoose = require("mongoose");

// Define the schema for the service document
const ServiceSchema = new mongoose.Schema({
    equipment: {
        type: String,
        required: true
    },
    testingDate: {
        type: Date,
        required: true
    },
    nextServiceDate: {
        type: Date,
        required: true
    },
    remarks: {
        type: String,
        required: true
    }
});

// Create a model based on the schema
const ServiceModel = mongoose.model("services", ServiceSchema);

// Export the model
module.exports = ServiceModel;
