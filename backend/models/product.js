import mongoose, { models } from "mongoose";
const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      strim: true,
      maxLength: 32,
      required: true,
    },
    description: {
      type: String,
      maxLength: 200,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contenType: String,
    },
    isShipping: {
      type: Boolean,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);
