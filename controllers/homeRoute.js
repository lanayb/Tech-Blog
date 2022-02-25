const router = require('express').Router();
const { User, Post } = require("../models");
const path = require('path');


router.get('/home', async(req, res) => {
    try {
        res.render('homePage', {});
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/signup', async(req, res) => {
    try{
        res.render('signUp', {});
    } catch(err) {
        res.status(400).json(err);
    }
});

router.get('/login', async(req, res) => {
    try{
        res.render('login', {});
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;



