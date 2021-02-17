const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postQueries = require('./queries/postQueries');
const app = express();
const port = process.env.PORT || 3000;

// TODO: Install cors

// Connect to MongoDB Atlas
const client = mongoose.connect(
  'mongodb+srv://naznsan:bWcbJSQ9fPYf2tYg@main.15kjw.mongodb.net/Main?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.use('/posts', postQueries);

app.get('/', (req, res) => {
  res.send('Welcome to DailyHighlights!');
});

app.get('/login', (req, res) => {
  res.send('Please log in');
});

app.listen(port, () => {
  console.log('Live Server launched on port', port);
});
