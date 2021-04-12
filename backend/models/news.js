import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 100,
      strim: true,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
      data: Buffer,
      contenType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("news", newsSchema);
