const { Router, } = require('express');
const auth = require('./auth');
const film = require('./film');

const router = Router();

router.get('/api/apa', (req, res) => {
  res.status(200).json({
    message: 'API is running',
  });
});

router.use('/api/users', auth);
router.use('/api/films', film);

module.exports = router;