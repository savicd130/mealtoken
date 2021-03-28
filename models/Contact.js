const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  address1title: {
    type: String,
    required: true,
  },
  address1desc: {
    type: String,
    required: true,
  },
  address2title: {
    type: String,
    required: true,
  },
  address2desc: {
    type: String,
    required: true,
  },
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
