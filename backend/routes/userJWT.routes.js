const { Router } = require('express');
const { signup, signin, me } = require('../controllers/controllers.usersJWT');
const verifyToken = require('../controllers/verifyToken');
const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', verifyToken, me);


module.exports = router;