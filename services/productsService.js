const Product = require("../models/Product");

async function getProductsPaginated(page = 1, limit = 10, type) {
  const skip = (page - 1) * limit;
  const filter = type ? { type } : {};

  const products = await Product.find(filter)
    .populate("order", "title")
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments(filter);

  return {
    data: products,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
}
async function getAllProductTypes() {
  return await Product.distinct("type");
}

async function getProductById(id) {
  return Product.findById(id).populate("order", "title date description");
}

module.exports = { getProductsPaginated, getProductById, getAllProductTypes };
