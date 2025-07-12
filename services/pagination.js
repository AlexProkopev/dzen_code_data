async function getOrdersPagination(req, res, next) {
  try {
    const { page = 1, limit = 10 } = req.query;
    const data = await ordersService.getAllOrders({ page: +page, limit: +limit });
    res.json({
      orders: data,     
      page: data.page,        
      totalPages: data.totalPages,  
      totalCount: data.totalCount,  
    });
  } catch (err) {
    next(err);
  }
}
