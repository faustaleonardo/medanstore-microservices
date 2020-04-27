const Router = require('@koa/router');

const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = new Router();

router.get('/', getCategories);
router.get('/:id', getCategory);

// protected by auth and has to be admin
router.post('/', createCategory);
router.patch('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
