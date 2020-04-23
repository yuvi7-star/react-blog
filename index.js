const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
  .connect(
    'mongodb+srv://mongoyuvi:13011999@react-blog-cluster-zvqzc.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => console.log('connected'))
  .catch(() => console.log('error while connecting to db') );

app.use('/', (req, res) => {
  res.send('hello');
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log('server started');
});
