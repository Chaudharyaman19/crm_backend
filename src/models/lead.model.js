const mongoose = require("mongoose");
const LeadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    status: { type: String, default: "new" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Lead", LeadSchema);
