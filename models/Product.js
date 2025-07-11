const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  serialNumber: { type: Number, required: true },
  is_new: { type: Boolean, required: true },
  photo: { type: String },
  title: { type: String, required: true },
  type: { type: String },
  specification: { type: String },
  guarantee: {
    start: { type: String },
    end: { type: String }
  },
  price: [
    {
      value: { type: Number },
      symbol: { type: String },
      isDefault: { type: Boolean }
    }
  ],
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  date: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
