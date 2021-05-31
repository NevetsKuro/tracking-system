const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT | 5000;
const app = express();


app.get('/status', (req, res) => { res.status(200).end(); });
app.head('/status', (req, res) => { res.status(200).end(); });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const uri = "mongodb+srv://steven:Steven1996@cluster0.9vg9o.mongodb.net/tracking-system?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

require('./models/user');
require('./models/shares');

app.use(require('./api'));

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    'errors': {
      message: err.message,
      error: {}
    }
  });
});


app.listen(PORT, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server started on ${PORT}`);
});