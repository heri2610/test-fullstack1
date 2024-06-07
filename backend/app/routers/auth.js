const router = require('express').Router();
const {register, login} = require('../controllers/user');
const {loginValidation, registerValidation} = require('../../utils/validators');

router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;