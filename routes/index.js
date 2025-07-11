const express = require("express");
const router = express.Router();

const ordersRoutes = require("./orders");
const productsRoutes = require("./products");

router.use("/orders", ordersRoutes);
router.use("/products", productsRoutes);

module.exports = router;
