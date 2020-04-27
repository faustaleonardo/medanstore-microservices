const Router = require('@koa/router');
const upload = require('../utils/upload');

const {
  getPictures,
  createPicture,
  deletePicture,
  deletePictures,
} = require('../controllers/pictureController');

const { requireLogin, requireAdmin } = require('../middlewares/require');

const router = new Router();

router.get('/items/:id', getPictures);

router.post(
  '/items/:id',
  requireLogin,
  requireAdmin,
  upload.array('images'),
  createPicture
);
router.delete('/items/:id', requireLogin, requireAdmin, deletePictures);
router.delete('/:id', requireLogin, requireAdmin, deletePicture);

module.exports = router;
