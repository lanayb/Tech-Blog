const router = require("express").Router();
const { Post } = require("../../models");

// /api/dashboard/userPost
router.get('/userPost', async(req, res) => {
    try {
        const userPost = await Post.findAll();
        // res.status(200).json(userPost);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/userPost', async(req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;