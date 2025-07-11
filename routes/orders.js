const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

router.get("/", ordersController.getOrders);
router.get("/:id", ordersController.getOrderById);
router.delete("/:id", ordersController.deleteOrder);


module.exports = router;
