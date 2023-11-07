const { Router } = require('express');
const { getAllReact, postReact, deleteReact, updateReact } = require('../controllers/controllers.animeReactTest');
const router = Router();

router
.get('/getAnimeTest', getAllReact)
.post('/postAnimeTest', postReact)
.delete('/deleteAnimeTest/:id', deleteReact)
.patch('/updateAnimeTest/:id', updateReact);


module.exports = router;