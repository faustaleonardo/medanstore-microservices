const Router = require('@koa/router');

const router = new Router();

const { requireLogin } = require('../middlewares/require');

const { getCities, getCosts } = require('../controllers/shippingController');

router.get(`/cities`, requireLogin, getCities);
router.get(`/:id/costs`, requireLogin, getCosts);

module.exports = router;
