const Router = require('@koa/router');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const router = new Router();

router.get('/', getCategories);
router.get('/:id', getCategory);

router.post('/', requireLogin, requireAdmin, createCategory);
router.patch('/:id', requireLogin, requireAdmin, updateCategory);
router.delete('/:id', requireLogin, requireAdmin, deleteCategory);

module.exports = router;
