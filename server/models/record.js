const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  name: String,
  genre: String,
  year: Number,
  artistId: String
});

module.exports = mongoose.model('Record', recordSchema);