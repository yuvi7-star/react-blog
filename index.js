const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { User } = require('./model/user');

const config = require('./config/key');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/api/user/register', (req, res, next) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.status(200).json({ success: true });
  });
});

const PORT = 4000;

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to databse');
    app.listen(PORT, () => {
      console.log('server started');
    });
  })
  .catch(() => console.log('error while connecting to db'));
