const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: String,
  country: String
});

module.exports = mongoose.model('Artist', artistSchema);