const Router = require('@koa/router');

const {
  getVouchers,
  getVoucher,
  getVoucherByCode,
  createVoucher,
  updateVoucher,
  deleteVoucher,
} = require('../controllers/voucherController');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const router = new Router();

router.get('/', requireLogin, requireAdmin, getVouchers);
router.get('/:id', requireLogin, requireAdmin, getVoucher);
router.get('/code/:code', getVoucherByCode);

router.post('/', requireLogin, requireAdmin, createVoucher);
router.patch('/:id', requireLogin, requireAdmin, updateVoucher);
router.delete('/:id', requireLogin, requireAdmin, deleteVoucher);

module.exports = router;
