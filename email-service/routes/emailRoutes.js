const Router = require('@koa/router');

const { sendPaymentReminder } = require('../controllers/emailController');
const { requireLogin } = require('../middlewares/require');

const router = new Router();

router.post('/payment-reminder/send', requireLogin, sendPaymentReminder);

module.exports = router;
