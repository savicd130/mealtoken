const express = require('express');
const router = express.Router();

const About = require('../models/About');
const auth = require('../middleware/auth');

// @route   GET api/users
// @desc    Get contact
// @access  Public

router.get('/', async (req, res) => {
  try {
    const contact = await About.find();

    res.status(200).json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   POST api/users
// @desc    Create about
// @access  Private ADMIN

router.post('/', auth, async (req, res) => {
  const { title, para1, para2, para3 } = req.body;
  try {
    const about = new About({
      title,
      para1,
      para2,
      para3,
    });

    await about.save();

    res.status(200).json({ about });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   PUT api/users
// @desc    Update about
// @access  Private ADMIN
router.put('/', auth, async (req, res) => {
  const { title, para1, para2, para3 } = req.body;

  const updateAbout = {
    title,
    para1,
    para2,
    para3,
  };

  try {
    await About.findByIdAndUpdate('6060d389ff9f6803505abfd6', updateAbout);

    res.status(200).json({
      message: 'Update about',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

module.exports = router;
