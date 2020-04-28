const Router = require('@koa/router');

const {
  getItems,
  getItemAndPictures,
  getItemsAndPictures,
  getItemCategoryAndPictures,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/itemController');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const router = new Router();

router.get('/', getItems);
router.get('/pictures', getItemsAndPictures);

router.get('/:id', getItem);
router.get('/:id/pictures', getItemAndPictures);
router.get('/:id/categoryandpictures', getItemCategoryAndPictures);

router.post('/', requireLogin, requireAdmin, createItem);
router.patch('/:id', requireLogin, requireAdmin, updateItem);
router.delete('/:id', requireLogin, requireAdmin, deleteItem);

module.exports = router;
