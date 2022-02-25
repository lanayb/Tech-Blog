const router = require('express').Router();

const dashboard = require('./dashboard');
const login = require('./login');
const signUp = require('./signup');

router.use('/dashboard', dashboard);
router.use('/login', login);
router.use('/signup', signUp);

module.exports = router;


