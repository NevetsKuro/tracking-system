const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  parent1: Number,
  parent2: Number,
  parent3: Number
});

const ReferralShare = mongoose.model('ReferralShare', schema);

module.exports = ReferralShare;