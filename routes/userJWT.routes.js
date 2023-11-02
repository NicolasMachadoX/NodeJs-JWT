const { Router } = require('express');
const { getAll } = require('../controllers/controllers.usersJWT');
const router = Router();

router.get('/get', getAll);


module.exports = router;