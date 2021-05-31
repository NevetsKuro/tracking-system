const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT | 5000;
const app = express();

app.get('/', (req, res) => { res.send("Server is on!").end(); });

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// const uri = "mongodb+srv://<username>:<password>@cluster0.9vg9o.mongodb.net/tracking-system?retryWrites=true&w=majority";
const uri = "mongodb+srv://<username>:<password>@cluster0.9vg9o.mongodb.net/tracking-system?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

require('./models/user');
require('./models/shares');

app.use(require('./api'));

app.listen(PORT, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Server started on ${PORT}`);
});