const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const config = require('config');
const router = express.Router();
const jwt = require('jsonwebtoken');

// User
const User = require('../models/User');
const auth = require('../middleware/auth');
////TEST AUTH
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select([
      '-password',
      '-token',
    ]);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   POST api/users
// @desc    Register user
// @access  Public

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, token } = req.body;

    try {
      let user = await User.findOne({ email });

      // Check if user exist
      if (!user) {
        res.status(400).json({ errors: [{ message: 'User not exist' }] });
      }

      const isPassGood = await bcryptjs.compare(password, user.password);

      if (!isPassGood) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }
      const access = config.get('highaccess') === token ? true : false;

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('secretToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, highaccess: access });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Something get wrong on server!');
    }
  }
);

module.exports = router;
