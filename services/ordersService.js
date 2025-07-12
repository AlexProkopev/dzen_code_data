const Order = require("../models/Order");
const Product = require("../models/Product");

async function getAllOrders({ page = 1, limit = 10 }) {
  const skip = (page - 1) * limit;

  const totalCount = await Order.countDocuments();

  const orders = await Order.find().skip(skip).limit(limit);

  const ordersWithProducts = await Promise.all(
    orders.map(async (order) => {
      const products = await Product.find({ order: order._id });
      return { ...order.toObject(), products };
    })
  );

  const totalPages = Math.ceil(totalCount / limit);

  return {
    orders: ordersWithProducts,
    page,
    totalPages,
    totalCount,
  };
}
async function getOrderById(id) {
  const order = await Order.findById(id);
  if (!order) return null;
  const products = await Product.find({ order: id });
  return { ...order.toObject(), products };
}

async function deleteOrder(id) {
  await Product.deleteMany({ order: id });
  await Order.findByIdAndDelete(id);
}

module.exports = { getAllOrders, getOrderById, deleteOrder };
