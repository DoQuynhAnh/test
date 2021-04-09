const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    maxLength: 60,
    strim: true,
    require: true
  },
}, { timestamps: true });

module.exports = mongoose.model("category", categorySchema);
