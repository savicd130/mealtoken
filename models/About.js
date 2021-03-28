const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  para1: {
    type: String,
    required: true,
  },
  para2: {
    type: String,
    required: true,
  },
  para3: {
    type: String,
  },
});

module.exports = About = mongoose.model('about', AboutSchema);
