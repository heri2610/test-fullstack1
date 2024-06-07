const router = require('express').Router();
const {getAllFilm, getFilmById, updateFilm, addFilm, deleteFilm} = require('../controllers/film');

router.post('/',addFilm);
router.get('/',getAllFilm);
router.get('/:id',getFilmById);
router.put('/:id',updateFilm);
router.delete('/:id',deleteFilm);

module.exports = router;