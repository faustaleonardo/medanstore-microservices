const Router = require('@koa/router');
const upload = require('../utils/upload');

const {
  getPictures,
  createPicture,
  deletePicture,
  deletePictures,
} = require('../controllers/pictureController');

const router = new Router();

router.get('/items/:id', getPictures);

// protected and has to be admin
router.post('/items/:id', upload.array('images'), createPicture);
router.delete('/items/:id', deletePictures);
router.delete('/:id', deletePicture);

module.exports = router;
