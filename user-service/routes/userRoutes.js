const Router = require('@koa/router');

const {
  signup,
  login,
  user,
  getUser,
} = require('../controllers/userController');
const router = new Router();

router.get('/users/:id', getUser);
router.post('/signup', signup);
router.post('/login', login);
router.get('/user', user);

module.exports = router;
