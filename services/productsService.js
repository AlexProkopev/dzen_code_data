const Product = require("../models/Product");

async function getProductsPaginated(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const products = await Product.find()
    .populate("order", "title")
    .skip(skip)
    .limit(limit);

  const total = await Product.countDocuments();

  return {
    data: products,
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
}

async function getProductById(id) {
  return Product.findById(id).populate("order", "title date description");
}

module.exports = { getProductsPaginated, getProductById };
