const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: Number,
  name: String,
  parent1: Number,
  parent2: Number,
  parent3: Number,
  amount: Number,
  created_at: Date
}, {
  versionKey: false
});

const User = mongoose.model('User', userSchema);

module.exports = User;