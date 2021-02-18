if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const http = require('http');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postQueries = require('./queries/postQueries');
const app = express();
const port = process.env.PORT || 3000;

// TODO: Change cors address port if needed
app.use(cors({origin: 'https://localhost:3001'}))

// Connect to MongoDB Atlas
const client = mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@main.15kjw.mongodb.net/Main?retryWrites=true&w=majority`,
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
