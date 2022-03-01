const router = require("express").Router();
const { Post } = require("../../models");

// /api/dashboard/userPost
router.get('/userPost', async(req, res) => {
    try {
        const userPost = await Post.findAll();
        res.status(200).json(userPost);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/userPost', async(req, res) => {
    console.log(req.body);
    try {
        const newPost = await Post.create({
            comments: "thanks",
            user_id: 4
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newPost);
        });
        // res.json(newPost);
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;