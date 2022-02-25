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
        const userLogin = await User.create(req.body);
        res.status(200).json(userLogin);
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;
