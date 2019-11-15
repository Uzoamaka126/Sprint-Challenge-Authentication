const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./user-model');

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      console.log(saved)
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error adding a new user'
      })
    })
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username}`,
          token: token,
        })
      } else {
        res.status(401).json({
          message: 'Invalid Login Details'
        })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    })
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  Users.remove(id)
      .then(count => {
          if(count > 0) {
              res.status(200).json({
                  message: "The Character has been deleted"
              })
          } else {
              res.status(404).json({
                  message: 'The character could not be found'
              })
          }
      })
      .catch(error => {
          res.status(500).json({
              message: 'Error deleting the character'
          })
      })
})

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['username'],
  }
  const options = {
    expiresIn: '1d',
  }
  const result = jwt.sign(
    payload,
    'A SECRET CODE HERE',
    options
  )

  return result;
}

module.exports = router;
