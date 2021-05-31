const ReferralShare = require('../models/shares');
const router = require('express').Router();

router.get('/find', async (req, res) => {
  try {
    const referralshare = await ReferralShare.find();
    res.json(referralshare);
  } catch (e) {
    res.json({ error: e }).end()
  }
})

router.post('/add', async (req, res) => {
  const body = req.body;

  let referralshare = {
    parent1: body.p1,
    parent2: body.p2,
    parent3: body.p3,
  };
  let option = { upsert: true, setDefaultsOnInsert: true }
  let id = '60b49f9a4001ec32c0ebdd54';
  ReferralShare.update({ _id: id }, referralshare, option, function (err, u) {
    if (err) return res.json(err).end();
    res.send(`Successfully updated collection`).end();
  });

});

module.exports = router;