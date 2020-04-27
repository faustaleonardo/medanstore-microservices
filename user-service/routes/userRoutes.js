const Router = require('@koa/router');

const { signup, login, user } = require('../controllers/userController');
const router = new Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', user);

module.exports = router;
