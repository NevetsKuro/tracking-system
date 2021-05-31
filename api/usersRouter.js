const ParentShare = require('../models/shares');
const User = require('../models/user');

const router = require('express').Router();

router.get('/find', async (req, res) => {
  try {
    const user = await User.find({});
    // const parentShares = await ParentShare.findById({ _id: '60b485c8bf5c884958652a5c' })
    res.json(user)
  } catch (e) {
    res.json({ error: e }).end()
  }
})

router.post('/add', async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = await User.find().sort({ created_at: -1 }).limit(3)

  let useradd = new User({
    userid: user[0]?.userid ? user[0].userid + 1 : 1,
    name: body.name,
    parent1: user[0]?.userid ? user[0].userid : 0,
    parent2: user[1]?.userid ? user[1].userid : 0,
    parent3: user[2]?.userid ? user[2].userid : 0,
    amount: body.amt ? body.amt : 0,
    created_at: new Date()
  });

  useradd.save(function (err, u) {
    if (err) return res.json(err);
    console.log(u);
    res.send(`${u.name} saved to user collection`).end();
  });
});

router.delete('/remove', async (req, res) => {
  const body = req.body;
  const op = await User.deleteOne({ userid: body.id });
  if (op.n > 0) {
    res.json({ message: "Successfully Deleted User" });
  }
  res.json({ message: "Failed to Delete User" });

});


module.exports = router;