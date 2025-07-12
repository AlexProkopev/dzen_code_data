const productsService = require("../services/productsService");

async function getProducts(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const type = req.query.type;

    const products = await productsService.getProductsPaginated(
      page,
      limit,
      type
    );
    res.json(products);
  } catch (err) {
    next(err);
  }
}

async function getProductTypes(req, res, next) {
  try {
    const types = await productsService.getAllProductTypes();
    res.json(types);
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

module.exports = { getProducts, getProductById, getProductTypes };
