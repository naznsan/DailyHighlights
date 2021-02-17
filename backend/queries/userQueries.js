let router = require('express').Router();
const User = require('../models/userModel');

// Handle all users
router.get('/', (req, res) => {
  users.find({}, (err, users) => {
    if (err) {console.log(err)}
    else {
      res.json(users);
    }
  });
});

// Handle new user
router.post('/', (req, res) => {
  const user = new User();
  user.username = req.body.username;
  user.password = req.body.password;

  user.save((err, user) => {
    if (err) {console.log(err)}
    else {
      res.json(user);
    }
  });
});

// Handle view user
router.post('/:id', (req, res) => {
  User.findById(req.params.id).exec((err, foundUser) => {
    if (err) {console.log(err)}
    else {
      res.json(foundUser);
    }
  });
});

module.exports = router;