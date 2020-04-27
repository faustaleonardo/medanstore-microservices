const Router = require('@koa/router');

const { sendPaymentReminder } = require('../controllers/emailController');

const router = new Router();

// protected and has to be user
router.post('/payment-reminder/send', sendPaymentReminder);

module.exports = router;
