const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.getProducts);
router.get("/types", productsController.getProductTypes)
router.get('/:productId', productsController.getProductById);

module.exports = router;
