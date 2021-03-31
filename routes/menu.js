const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

const Menu = require('../models/Menu');
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   POST api/menu
// @desc    Create menu item
// @access  Private ADMIN

router.post('/', auth, upload.single('file'), async (req, res) => {
  const { destination, filename } = req.file;
  const path = `${destination.replace('.', '')}/${filename}`;

  const { name, descShort, descLong, price, type } = req.body;
  try {
    const menu = new Menu({
      name,
      descShort,
      descLong,
      price,
      type,
      imgUrl: path,
    });

    await menu.save();

    res.status(200).json({ menu });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   GET api/menu
// @desc    Get all items and get by type
// @access  Public

router.get('/', async (req, res) => {
  try {
    const menu = await Menu.find(req.query);

    res.status(200).json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   GET api/menu
// @desc    Get by id
// @access  Public

router.get('/:_id', async (req, res) => {
  console.log(req.params);
  try {
    const menu = await Menu.findById(req.params);

    res.status(200).json(menu);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});

// @route   POST api/users/comment
// @desc    Create comment by user
// @access  Privat
router.post('/comment/:_id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select([
      '-password',
      '-token',
    ]);
    const menu = await Menu.findById(req.params);

    const newComment = {
      name: user.name,
      text: req.body.text,
      user: req.user.id,
    };

    menu.comments.unshift(newComment);

    await menu.save();

    res.status(200).json(menu.comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Something get wrong on server!');
  }
});
module.exports = router;
