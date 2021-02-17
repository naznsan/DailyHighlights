let router = require('express').Router();
const Post = require('../models/postModel');

// Handle all posts
router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    if (err) {console.log(err)}
    else {
      res.json(posts);
    }
  });
});

// Handle new post
router.post('/', (req, res) => {
  const post = new Post();
  post.imageUrl = req.body.imageUrl;
  // TODO: Enable user login later
  // post.author = {
    // id: req.user._id,
    // username: req.user.username,
  // },
  post.category = req.body.category;

  post.save((err, post) => {
    if (err) {console.log(err)}
    else {
      res.json(post);
    }
  });
});

// Handle view post
router.get('/:id', (req, res) => {
  Post.findById(req.params.id).exec((err, foundPost) => {
    if (err) {console.log(err)}
    else {
      res.json(foundPost);
    }
  });
});

module.exports = router;