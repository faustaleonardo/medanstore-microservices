const Router = require('@koa/router');

const {
  getOrders,
  getOrdersAndItems,
  getOrder,
  createOrder,
} = require('../controllers/orderController');

const { requireLogin } = require('../middlewares/require');

const router = new Router();

router.get('/', requireLogin, getOrders);
router.get('/:orderId/items', requireLogin, getOrdersAndItems);
router.get('/:orderId', requireLogin, getOrder);
router.post('/', requireLogin, createOrder);

module.exports = router;
