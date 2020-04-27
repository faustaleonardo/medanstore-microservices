const Router = require('@koa/router');

const {
  getVouchers,
  getVoucher,
  getVoucherByCode,
  createVoucher,
  updateVoucher,
  deleteVoucher,
} = require('../controllers/voucherController');

const router = new Router();

router.get('/', getVouchers);
router.get('/:id', getVoucher);
router.get('/code/:code', getVoucherByCode);

router.post('/', createVoucher);
router.patch('/:id', updateVoucher);
router.delete('/:id', deleteVoucher);

module.exports = router;
