const router = require('express').Router();
const Users = require('../auth/user-model');

router.get('/', (req, res) => {
    Users.get()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
});

module.exports = router;
