const productsService = require("../services/productsService");

async function getProducts(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const products = await productsService.getProductsPaginated(page, limit);
    res.json(products);
  } catch (err) {
    next(err);
  }
}


async function getProductById(req, res, next) {
  try {
    const { productId } = req.params;
    const product = await productsService.getProductById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    next(err);
  }
}

module.exports = { getProducts, getProductById };