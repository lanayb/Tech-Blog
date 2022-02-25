const router = require('express').Router();
const { User, Post } = require('../models');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;


