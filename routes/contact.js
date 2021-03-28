const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

// @route   GET api/users
// @desc    Get contact
// @access  Public

router.get('/', async (req, res) => {
  try {
    const contact = await Contact.find();

    res.status(200).json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   POST api/users
// @desc    Create contact
// @access  Private ADMIN

router.post('/', auth, async (req, res) => {
  try {
    const {
      email,
      address1title,
      address1desc,
      address2title,
      address2desc,
    } = req.body;

    const contact = new Contact({
      email,
      address1title,
      address1desc,
      address2title,
      address2desc,
    });

    await contact.save();

    res.send(200).json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   PUT api/users
// @desc    Update contact
// @access  Private ADMIN

router.put('/', auth, async (req, res) => {
  const {
    email,
    address1title,
    address1desc,
    address2title,
    address2desc,
  } = req.body;

  const updateContact = {
    email,
    address1title,
    address1desc,
    address2title,
    address2desc,
  };

  try {
    let contact = await Contact.findByIdAndUpdate(
      '6060c854a562de44b46b52ef',
      updateContact
    );

    res.status(200).json({
      message: 'Update contact',
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

module.exports = router;
