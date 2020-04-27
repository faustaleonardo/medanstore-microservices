const Router = require('@koa/router');

const {
  getPayments,
  getPayment,
  finishPayment,
  createPayment,
  updatePayment,
} = require('../controllers/paymentController');

const { requireLogin } = require('../middlewares/require');

const router = new Router();

router.get('/', requireLogin, getPayments);
router.get('/:id', requireLogin, getPayment);
router.post('/:orderId', requireLogin, createPayment);
router.patch('/:orderId/stripe', requireLogin, finishPayment);
router.patch('/:orderId', requireLogin, updatePayment);

module.exports = router;
