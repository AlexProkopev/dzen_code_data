const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, default: "" },
  },
  { timestamps: true }
);

orderSchema.pre("findOneAndDelete", async function(next) {
  try {
    const doc = await this.model.findOne(this.getFilter());
    if (doc) {
      await mongoose.model("Product").deleteMany({ order: doc._id });
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
