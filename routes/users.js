const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const config = require('config');
const router = express.Router();
const jwt = require('jsonwebtoken');

// User
const User = require('../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, token } = req.body;

    try {
      // Check if user is alredy here
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ message: 'User alredy exist' }] });
      }

      user = new User({
        name,
        email,
        password,
        token,
      });

      const protect = await bcryptjs.genSalt(15);

      user.password = await bcryptjs.hash(password, protect);

      await user.save();

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
