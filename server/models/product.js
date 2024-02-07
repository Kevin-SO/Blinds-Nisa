const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const   UserSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  room:{
    type: String,
    required: false
  },
  width: {
    type: Number,
    required: true
  },
  height:{
    type: Number,
    required: true
  },
  material:{
    type: String,
    required: true
  },
  cassette:{
    type: String,
    required: true
    },
  bottomRail:{
    type: String,
    required: true
  },
  Control:{
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Product', ProductSchema);