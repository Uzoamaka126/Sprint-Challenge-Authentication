const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./user-model');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  // const hash = 
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
