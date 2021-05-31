const ReferralShare = require('../models/shares');
const ParentShare = require('../models/shares');
const User = require('../models/user');

const router = require('express').Router();

router.post('/addToWallet', async (req, res) => {
  const body = req.body;
  console.log(body);
  const userExist = await User.findOne({ name: body.name })
  const referralshare = await ReferralShare.find();
  console.log(userExist);

  if (userExist && referralshare) {
    let u = await User.updateOne({ name: body.name }, { $inc: { "amount": body.amt } });
    let count = 0
    if (u.n > 0) { console.log(`Added to wallet of user ${body.name}`); count++; }

    if (userExist.parent1 > 0) {
      console.log(`finding user ${userExist.parent1}`);
      u = await User.updateOne({ userid: userExist.parent1 }, { $inc: { "amount": body.amt * referralshare[0].parent1 } });
      if (u.n > 0) { console.log(`Added to wallet of user ${userExist.parent1}`); count++; }
    }
    if (userExist.parent2 > 0) {
      console.log(`finding user ${userExist.parent2}`);
      u += await User.updateOne({ userid: userExist.parent2 }, { $inc: { "amount": body.amt * referralshare[0].parent2 } });
      if (u.n > 0) { console.log(`Added to wallet of user ${userExist.parent2}`); count++; }
    }
    if (userExist.parent3 > 0) {
      console.log(`finding user ${userExist.parent3}`);
      u += await User.updateOne({ userid: userExist.parent3 }, { $inc: { "amount": body.amt * referralshare[0].parent3 } });
      if (u.n > 0) { console.log(`Added to wallet of user ${userExist.parent3}`); count++; }
    }
    res.json({ message: `${count} documents updated` })
  } else {
    res.json({ message: 'No Such User exist!!' })
  }

});

module.exports = router;