const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  imageUrl: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
  },
  category: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Post', postSchema);