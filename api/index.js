const router = require('express').Router();

router.use('/users', require('./usersRouter'));

router.use('/shares', require('./parentShareRouter'));

router.use('/wallet', require('./walletRouter'));

module.exports = router;