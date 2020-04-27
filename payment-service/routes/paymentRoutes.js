const Router = require('@koa/router');

const {
  getPayments,
  getPayment,
  finishPayment,
  createPayment,
  updatePayment,
} = require('../controllers/paymentController');

const router = new Router();

// protected and has to be user
router.get('/', getPayments);
router.get('/:id', getPayment);
router.post('/:orderId', createPayment);
router.patch('/:orderId/stripe', finishPayment);
router.patch('/:orderId', updatePayment);

module.exports = router;
