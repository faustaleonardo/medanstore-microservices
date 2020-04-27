const Router = require('@koa/router');

const router = new Router();

const { getCities, getCosts } = require('../controllers/shippingController');

router.get(`/cities`, getCities);
router.get(`/:id/costs`, getCosts);

module.exports = router;
