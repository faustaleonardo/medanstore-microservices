const Router = require('@koa/router');

const {
  getOrders,
  getOrdersAndItems,
  getOrder,
  createOrder,
} = require('../controllers/orderController');

const router = new Router();

// protected and has to be user
router.get('/', getOrders);
router.get('/:orderId/items', getOrdersAndItems);
router.get('/:orderId', getOrder);
router.post('/', createOrder);

module.exports = router;
