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

const router = new Router();

router.get('/', getItems);
router.get('/pictures', getItemsAndPictures);

router.get('/:id', getItem);
router.get('/:id/pictures', getItemAndPictures);
router.get('/:id/category&pictures', getItemCategoryAndPictures);

// protected and has to be admin
router.post('/', createItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
