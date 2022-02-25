const router = require('express').Router();
const { User } = require('../../models');

// /api/signup/userSignup
router.get('/userSignup', async(req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/userSignup', async(req, res) => {
    try {
        const userSignup = await User.create(req.body);
        res.status(200).json(userSignup);
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;