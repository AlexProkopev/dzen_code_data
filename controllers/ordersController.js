const ordersService = require("../services/ordersService");

async function getOrders(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await ordersService.getAllOrders({
      page: +page,
      limit: +limit,
    });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function deleteOrder(req, res, next) {
  try {
    const deletedOrder = await ordersService.deleteOrder(req.params.id);
    res.json({ message: "Order and associated products deleted", order: deletedOrder });
  } catch (err) {
    next(err);
  }
}


async function getOrderById(req, res, next) {
  try {
    const order = await ordersService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(order);
  } catch (err) {
    next(err);
  }
}

module.exports = { getOrders, deleteOrder, getOrderById };
