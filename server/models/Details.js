const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
 incomingSide: { type: String, required: true },
source: { type: String, required: true },
 busductCable: { type: String, required: true },
 vcbAcb: { type: String, required: true },
 outgoingTo: { type: String, required: true },
});

const DetailsModel = mongoose.model("details", DetailsSchema);

module.exports = DetailsModel;
