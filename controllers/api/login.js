const router = require("express").Router();
const { User } = require("../../models");

// /api/login/userLogin
router.get('/userLogin', async(req, res) => {
    try {
        const loginInfo = await User.findAll();
        res.status(200).json(loginInfo);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/userLogin', async(req, res) => {
    try {
        const userLogin = await User.findOne({
            where: {
              first_name: req.body.first_name,
              last_name: req.body.last_name,  
            },
        });
        let password = userLogin.password;


        console.log(userLogin);
        if(!userLogin) {
            res.status(400).json({
                message: 'Wrong email or password. Try again please!'
            });
        } else if (req.body.password !== password) {
            res.status(400).json({
                message: 'Wrong email or password. Try again please!'
                
            });
        } else {

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({
                user: userLogin, 
                message: 'Nice, you are now logged in!'
            });
        });
    }
        // res.status(200).json(userLogin);
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;
