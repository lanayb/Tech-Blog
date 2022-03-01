const router = require('express').Router();
const { User, Post } = require("../models");
const path = require('path');


router.get('/', async(req, res) => {
    const userData = await User.findAll().catch((err) => {
        res.json(err);
    });
    const home = userData.map((home) => home.get({ plain:true }));
    res.render('home', {home});
});


// router.get('/signup', async(req, res) => {
//     const signupPg = await User.findAll().catch((err) => {
//          res.json(err);
//     });
//     const signup = signupPg.map((signup) => signup.get({ plain:true }));
//     res.render('signup', {signup});
//  });



router.get('/login', async(req, res) => {
    try{
        res.render('login', {});
    } catch(err) {
        res.status(400).json(err);
    }
});

module.exports = router;



